import { forwardRef, useImperativeHandle, useEffect, useState, createRef } from "react";
import styles from "./Form.module.scss";
import { ERRORS_STRING, SENDLANE_LIST_ID_PARTIAL, CAMPAING_ID, MAIN_PRODUCT_ID } from "@logic/consts";
import Input from "@ui/Input/Input.jsx";
import Select from "@ui/Select/Select.jsx";
import { OrderButton } from "@ui/OrderButton/OrderButton.jsx";
import paymentMethodsImg from "@images/payment_methods.webp";
import { useRef } from "react";
import { USA_STATES } from "@logic/consts";
import { getCheckoutClientFormValues } from "./FormUtils.js";
import { useNavigate } from "react-router-dom";
import { evaluateFetchPost } from "@logic/utils";
import { sendLeadService, addContactToListService } from "@logic/services";
import Loader from "@ui/Loader/Loader.jsx";

const Form = forwardRef(function Form(props) {
	const { containerClassName, isMobileSection } = props;
	const [refsArray, setRefsArray] = useState(undefined);
	const customerFormRef = useRef(null);
	const [isLoader, setIsLoader] = useState(false);

	const navigate = useNavigate();

	const handleOrder = async () => {
		setIsLoader(true);
		const noorSessionId = sessionStorage.getItem("noorSessionId");

		const checkoutFormData = await getCheckoutClientFormValues(customerFormRef);

		if (checkoutFormData) {
			const { firstName, lastName, email, phone, deliveryAddress, deliveryAddress2, city, state, zipCode, country } =
				checkoutFormData;

			//send to sendlane
			sessionStorage.setItem(
				"noorSendlaneData",
				JSON.stringify({ email: email, firstName: firstName, lastName: lastName, phone: `+3${phone}` })
			);

			const noorSendlaneData = JSON.parse(sessionStorage.getItem("noorSendlaneData"));

			const addContactdata = await evaluateFetchPost(addContactToListService, {
				sendlaneListId: SENDLANE_LIST_ID_PARTIAL,
				...noorSendlaneData,
			});

			if (!addContactdata) {
				setIsLoader(false);
				return;
			}

			await evaluateFetchPost(sendLeadService, {
				product1_qty: "1",
				campaignId: CAMPAING_ID,
				product1_id: MAIN_PRODUCT_ID,
				firstName: firstName,
				lastName: lastName,
				...(noorSessionId && { sessionId: noorSessionId }),
				phoneNumber: phone,
				emailAddress: email,
				address1: deliveryAddress,
				address2: deliveryAddress2,
				postalCode: zipCode,
				city: city,
				billShipSame: true,
				state: state,
				country: country,
				shipFirstName: firstName,
				shipLastName: lastName,
				shipAddress1: deliveryAddress,
				shipAddress2: deliveryAddress2,
				shipPostalCode: zipCode,
				shipCity: city,
				shipState: state,
				shipCountry: country,
				paySource: "CREDITCARD",
				salesUrl: window.location.href,
			}).then((data) => {
				if (data?.orderId) {
					sessionStorage.setItem("noorOrderId", data.orderId);
					navigate("/love-serum/checkout");
				} else {
					console.warn("Konnektive session id is not generated");
				}
			});
		} else {
			setIsLoader(false);
		}
	};

	const handlePhoneNumberChange = (event) => {
		if (event) {
			const valor = event.target.value;
			if (!valor) {
				customerFormRef.current?.setFieldValue("phone", "");
				return;
			}
			let soloNumeros = valor.replace(/\D/g, "");
			const longitud = soloNumeros.length;
			if (longitud > 10) {
				soloNumeros = soloNumeros.slice(0, 10);
			}

			let numeroFormateado = soloNumeros;
			if (numeroFormateado.length > 6) {
				numeroFormateado = `(${numeroFormateado.slice(0, 3)}) ${numeroFormateado.slice(
					3,
					6
				)}-${numeroFormateado.slice(6, 10)}`;
			} else if (numeroFormateado.length > 3) {
				numeroFormateado = `(${numeroFormateado.slice(0, 3)}) ${numeroFormateado.slice(3)}`;
			} else {
				numeroFormateado = `(${numeroFormateado}`;
			}

			customerFormRef.current?.setFieldValue("phone", numeroFormateado);
		}
	};

	const formConfig = [
		{ type: "input", identifier: "firstName", topText: "First name" },
		{ type: "input", identifier: "lastName", topText: "Last name" },
		{ type: "input", identifier: "street", topText: "Street" },
		{ type: "input", identifier: "apartment", topText: "Apartment (optional)", isRequired: false },
		{ type: "input", identifier: "city", topText: "City" },
		{ type: "select", identifier: "state", topText: "Select State", selectOptions: USA_STATES },
		{ type: "input", identifier: "zipCode", topText: "Zip/Postal Code" },
		{ type: "input", identifier: "email", topText: "Email" },
		{
			type: "input",
			identifier: "phone",
			topText: "Phone...",
			onInputChange: handlePhoneNumberChange,
		},
	];

	useEffect(() => {
		const auxRefsArray = {};
		formConfig.map((item) => {
			auxRefsArray[item.identifier] = createRef();
		});
		setRefsArray(auxRefsArray);
	}, []);

	useImperativeHandle(
		customerFormRef,
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
							isValid = false;
						} else {
							let regex = /.*/;
							switch (key) {
								case "email":
									regex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
									isValid = regex.test(currentField.value);
									!isValid && currentRef?.changeErrorMessage(ERRORS_STRING.invalidMail);
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

	return (
		<div className={`${containerClassName} ${styles.formContainer} ${isMobileSection ? styles.mobileSection : ""}`}>
			{isLoader && <Loader />}
			<div className={styles.header}>
				<p>Tell Us Where To Ship Your</p>
				<p>
					<b>Free Bottle Today!</b>
				</p>
			</div>
			<form
				action=""
				className={styles.form}
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
										initialErrorMessage={item.initialErrorMessage}
										initialMood={item.initialMood}
										selectPlaceHolder="Select State"
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

			<OrderButton
				outerStyles={styles.outerSubmitBtn}
				clickHandler={handleOrder}
				subtext="Get Your Free Bottle Faster!"
			>
				Rush My Order!
			</OrderButton>

			<div className={styles.footer}>
				<img
					src={paymentMethodsImg}
					loading="lazy"
					alt="payment methods visa, mastercard, american express, discover"
				/>
			</div>
		</div>
	);
});

export default Form;
