import { forwardRef, useImperativeHandle, useEffect, useState, createRef, useRef } from "react";
import styles from "./Form.module.scss";
import { ERRORS_STRING, MAIN_PRODUCT_ID, SENDLANE_LIST_ID_PURCHASE } from "@logic/consts";
import Input from "@ui/Input/Input.jsx";
import Select from "@ui/Select/Select.jsx";
import nortonImg from "@images/norton.webp";
import sslSecure from "@images/sslSecure.webp";
import { evaluateFetchPost, sendGABeginCheckout, sendGAPurchaseEvent } from "@logic/utils";
import { useNavigate } from "react-router-dom";
import { sendOrderService } from "@logic/services";
import { addContactToListService } from "@logic/services";

import Loader from "@ui/Loader/Loader.jsx";

const Form = forwardRef(function Form(props, ref) {
	const { containerClassName, isMobileSection, formConfig, product } = props;
	const [refsArray, setRefsArray] = useState(undefined);
	const navigate = useNavigate();
	const [isLoader, setIsLoader] = useState(false);

	const checkoutGA = {
		value: Number(product.price),
		currency: "USD",
		items: [
			{
				item_id: String(product.productId),
				item_name: product.productName,
				quantity: 1,
			},
		],
	};

	useEffect(() => {
		const auxRefsArray = {};
		formConfig.map((item) => {
			auxRefsArray[item.identifier] = createRef();
		});
		setRefsArray(auxRefsArray);
	}, []);

	useImperativeHandle(
		ref,
		() => {
			return {
				getFormData,
				validateFields,
				makeFieldAsError,
				setFieldValue,
			};
		},
		[refsArray]
	);

	const setFieldValue = (fieldName, value) => {
		if (refsArray) {
			const currentRef = refsArray[fieldName].current;
			currentRef?.changeValue(value);
		}
	};

	const makeFieldAsError = (fieldName, errorMessage) => {
		if (refsArray) {
			const currentRef = refsArray[fieldName].current;
			currentRef?.changeFieldMood("error");
			currentRef?.changeErrorMessage(errorMessage);
		}
	};

	const getFormData = () => {
		if (!refsArray) return undefined;
		const auxFormData = {};
		Object.keys(refsArray).map((key) => {
			auxFormData[key] = refsArray[key].current?.getFieldData();
		});
		return auxFormData;
	};

	const validateFields = () => {
		const formData = getFormData();
		let isValid = true;

		if (formData) {
			Object.keys(formData).map((key) => {
				const currentField = formData[key];
				if (refsArray && refsArray[key].current) {
					const currentRef = refsArray[key].current;

					currentRef?.changeErrorMessage("");
					currentRef?.changeFieldMood("default");

					if (currentField?.isRequired) {
						if (!currentField?.value) {
							currentRef?.changeErrorMessage(ERRORS_STRING.voidField);
							isValid = isValid && false;
						} else {
							let regex = /.*/;
							switch (key) {
								case "cardNumber":
									let cardNumberLength = currentField.value.replace(/\s/g, "").length;
									isValid = isValid && (cardNumberLength === 15 || cardNumberLength === 16);
									!(cardNumberLength === 15 || cardNumberLength === 16) &&
										currentRef?.changeErrorMessage("Card length must be 16 digits");
									break;
								case "cardSecurityCode":
									isValid = isValid && (currentField.value.length === 4 || currentField.value.length === 3);

									!(currentField.value.length === 4 || currentField.value.length === 3) &&
										currentRef?.changeErrorMessage("Card security code length must be 3 or 4 digits");
									break;
								case "cardExpiration":
									let cardSecurityCodeLength = currentField.value.replace(/\s/g, "");
									regex = /^\s*(0[1-9]|1[0-2])\s*\/\s*(\d{2})\s*$/;
									isValid = isValid && regex.test(cardSecurityCodeLength);
									!isValid && currentRef?.changeErrorMessage("Incorrect format, use [MM / YY].");
									break;
								default:
									break;
							}
						}
					}
				}
			});
		} else {
			isValid = false;
		}

		return isValid;
	};

	const handleOrder = async () => {
		setIsLoader(true);

		await sendGABeginCheckout(checkoutGA);

		if (validateFields()) {
			const cardsFormData = getFormData();
			const noorSessionId = sessionStorage.getItem("noorSessionId");
			const noorOrderId = sessionStorage.getItem("noorOrderId");
			const dataKonnektive = {
				orderId: noorOrderId,
				paySource: "CREDITCARD",
				product1_id: MAIN_PRODUCT_ID,
				sessionId: noorSessionId,
				cardNumber: cardsFormData.cardNumber.value.replaceAll(" ", ""),
				cardMonth: cardsFormData.cardExpiration.value.slice(0, 2) || "",
				cardYear: cardsFormData.cardExpiration.value.slice(-2) || "",
				cardSecurityCode: cardsFormData.cardSecurityCode.value,
				redirectsTo: "https://noorhairoffers.com/api/konnective/tools/handleValidate3DSLS",
				errorRedirectsTo: window.location.origin,
			};

			const data = await evaluateFetchPost(sendOrderService, dataKonnektive);

			if (data) {
				setIsLoader(false);
				if (data?.items && data?.orderId) {
					await sendGAPurchaseEvent({
						transaction_id: data.orderId,
						...checkoutGA,
					});

					//send to sendlane
					const noorSendlaneData = JSON.parse(sessionStorage.getItem("noorSendlaneData"));

					const addContactdata = await evaluateFetchPost(addContactToListService, {
						sendlaneListId: SENDLANE_LIST_ID_PURCHASE,
						...noorSendlaneData,
					});

					sessionStorage.setItem(
						"orderData",
						JSON.stringify({ items: [{ price: product.price, shipping: product.shippingPrice }] })
					);
					sessionStorage.setItem("num_of_items", 0);

					if (!addContactdata) {
						setIsLoader(false);
						return;
					}

					navigate("/love-serum/us1");
				} else {
					setIsLoader(false);
					alert("Error, order not generated. Card rejected, please make a new purchase with another card..");
				}
			} else {
				setIsLoader(false);
			}
		} else {
			setIsLoader(false);
		}
	};

	return (
		<div className={`${containerClassName} ${styles.formContainer} ${isMobileSection ? styles.mobileSection : ""}`}>
			{isLoader && <Loader />}
			<form
				action=""
				className={`${styles.billing_form_content}`}
			>
				{refsArray && (
					<>
						{formConfig.map((item, index) => {
							if (item.type === "input") {
								return (
									<Input
										key={index}
										ref={refsArray[item.identifier]}
										identifier={item.identifier}
										topText={item.topText}
										type={item.inputType}
										initialErrorMessage={item.initialErrorMessage}
										initialMood={item.initialMood}
										initialValue={item.initialValue}
										isRequired={item.isRequired}
										onChange={item.onChange}
										onInputChange={item.onInputChange}
									/>
								);
							} else if (item.type === "select") {
								return (
									<Select
										key={index}
										ref={refsArray[item.identifier]}
										identifier={item.identifier}
										text={item.text}
										selectOptions={item.selectOptions}
										selectPlaceHolder="Select State"
										initialErrorMessage={item.initialErrorMessage}
										initialMood={item.initialMood}
										initialValue={item.initialValue}
										isRequired={item.isRequired}
										onChange={item.onChange}
									/>
								);
							}
						})}
					</>
				)}
			</form>

			<div className={styles.footer}>
				<img
					src={nortonImg}
					loading="lazy"
					alt="Secure"
				/>
				<div className={styles.product_card}>
					<p>
						<span>
							<b>Product</b>
						</span>
						<span>
							<b>Price</b>
						</span>
					</p>
					<p>
						<span style={{ textAlign: "left" }}>{product.productName}</span>
						<span>${product.price}</span>
					</p>
					<p>
						<span>Exclusive Free Trial - You Save:</span>
						<span>-${product.newCustomerDiscount}</span>
					</p>
					<p>
						<span>Bonus Noor Scalp Massager:</span>
						<span>FREE</span>
					</p>
					<p>
						<span>Shipping:</span>
						<span>$12.95</span>
					</p>
					<p>
						<span>
							<b>Total</b>
						</span>
						<span>${(Number(product.price) + Number(product.shippingPrice)).toFixed(2)}</span>
					</p>
				</div>
				<span className={styles.finalParagraph}>
					One or more items in your cart is a deferred or recurring purchase. By continuing with your payment, you
					agree that your payment method will automatically be charged at the price and frequency listed on this
					page until it ends or you cancel. All cancellations are subject to the{" "}
					<a href="https://noorhairofficial.com/pages/subscription-policy">cancellation policy.</a>
				</span>
				<button
					className={styles.button}
					onClick={handleOrder}
				>
					ORDER NOW
				</button>
				<img
					src={sslSecure}
					alt="SSL SECURE"
				/>
			</div>
		</div>
	);
});

export default Form;
