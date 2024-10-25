import {
	BASE_PATH_STATIC,
	BASE_PATH_DYNAMIC_CHECKOUT,
	CAMPAING_ID,
	USA_STATES,
	META_INITCHECKOUT_EVENT,
	META_PURCHASE_EVENT,
} from "@logic/consts";
import styles from "./CheckoutContent.styles.module.scss";
import Form from "@ui/Form/Form";
import { useContext, useEffect, useRef, useState } from "react";
import nortonImg from "@images/norton.webp";
import sslSecure from "@images/sslSecure.webp";
import { FormRef } from "@ui/types/forms.types";
import { CheckoutContext } from "@ui/CheckoutProvider/CheckoutProvider";
import {
	evaluateFetchPost,
	sendMetaEvent,
	sendMetaInitCheckout,
	sendMetaAddToCartEvent,
	sendGAPurchaseEvent,
	sendGAAddToCart,
	sendGABeginCheckout,
} from "@logic/utils";
import { sendOrderService, sendClickService, confirmPaypalService } from "@logic/services";
import {
	PayPalButtons,
	PayPalScriptProvider,
	PayPalButtonsComponentProps,
	ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";
import {
	onCancelPaypal,
	onErrorPaypal,
	handleClickPaypal,
	getCheckoutClientFormValues,
	sendSendlane,
} from "./CheckoutUtils";
import Checkbox from "@ui/Checkbox/Checkbox";
import { paypalData } from "./CheckoutContent.protypes";
import Loader from "@ui/Loader/Loader";

export default function CheckoutProvider() {
	const { context } = useContext(CheckoutContext)!;
	const { product } = context;
	console.log(product);
	const [isLoader, setIsLoader] = useState(false);
	const [paymentType, setPaymentType] = useState<"paypal" | "creditcard">("creditcard");
	const [isBilling, setIsBilling] = useState(false);
	const topRef = useRef<HTMLDivElement | null>(null);
	const customerFormRef = useRef<FormRef | null>(null);
	const deliveryFormRef = useRef<FormRef | null>(null);
	const billingAddressFormRef = useRef<FormRef | null>(null);
	const billingFormRef = useRef<FormRef | null>(null);
	const strCampaignId = String(CAMPAING_ID);
	const initialOptions: ReactPayPalScriptOptions = {
		clientId: "AaazqkTAjaKPbvo0EmqjfYJuwpcE1IeU7DOt3WFGlkXn2Rrlj6fKGiMkaE4HUSWBp96a8mEM4uLBdS-6",
		merchantId: "WH6U89Q4QCKXW",
		enableFunding: "paylater",
		disableFunding: "card",
		currency: "USD",
	};
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

	let ipAddress = "";
	fetch("https://api.ipify.org?format=json")
		.then((response) => response.json())
		.then((data) => {
			ipAddress = data.ip;
		})
		.catch((error) => {
			console.error("Error fetching IP:", error);
		});

	useEffect(() => {
		evaluateFetchPost(sendClickService, {
			campaignId: strCampaignId,
			pageType: "checkoutPage",
			requestUri: window.location.href,
			userAgent: window.navigator.userAgent,
		}).then((data) => {
			if (data?.sessionId) {
				sessionStorage.setItem("noorSessionId", data.sessionId);
			} else {
				console.warn("Konnektive session id is not generated");
			}
		});

		sendMetaAddToCartEvent();
		sendGAAddToCart(checkoutGA);
	}, []);

	const stylesPaypal: PayPalButtonsComponentProps["style"] = {
		disableMaxWidth: true,
	};

	const onApprovePaypal: PayPalButtonsComponentProps["onApprove"] = async (data, _) => {
		const orderId = sessionStorage.getItem("noorOrderId");
		const dataObj = {
			orderId: orderId,
			paypalSdk: 1,
			campaignId: strCampaignId,
			product1_id: String(product.productId),
			payerId: data.payerID,
			paypalBillerId: "1",
			sessionId: sessionStorage.getItem("noorSessionId"),
			token: data.orderID,
		};
		const response = await evaluateFetchPost(confirmPaypalService, dataObj);
		if (response?.orderStatus === "COMPLETE") {
			// @ts-ignore
			await sendMetaEvent(META_PURCHASE_EVENT, JSON.parse(sessionStorage.getItem("metaPurchaseObjNoor")));
			await sendGAPurchaseEvent({
				transaction_id: String(orderId),
				...checkoutGA,
			});

			sessionStorage.removeItem("metaPurchaseObjNoor");
			sessionStorage.removeItem("GAPurchaseObjNoor");

			location.href = window.location.origin + BASE_PATH_STATIC + "/us1?orderId=" + orderId;
		}
	};

	const handleOrder = async (paypalData: paypalData | null, paymentType: "PayPal" | "CreditCard") => {
		setIsLoader(true);
		// @ts-ignore
		const checkoutFormData = await getCheckoutClientFormValues(
			customerFormRef,
			deliveryFormRef,
			topRef,
			!isBilling && billingAddressFormRef
		);
		await sendMetaInitCheckout();

		if (checkoutFormData) {
			const {
				email,
				firstName,
				lastName,
				phone,
				deliveryAddress,
				deliveryAddress2,
				zipCode,
				city,
				state,
				country,
				billingAddress,
				billingAddress2,
				billingZipCode,
				billingCity,
				billingState,
			} = checkoutFormData;

			// set items for handling purchase withing 3DS CC
			sessionStorage.setItem("GAPurchaseObjNoor", JSON.stringify(checkoutGA));
			sessionStorage.setItem(
				"metaPurchaseObjNoor",
				JSON.stringify({
					email: email,
					phone: `1${phone}`,
					nombre: firstName,
					apellido: lastName,
					ciudad: city,
					estado: state,
					codigoPostal: zipCode,
					pais: country,
					genero: Math.floor(Math.random() * 2) ? "f" : "m",
					value: Number(product.price),
					currency: "USD",
					client_ip_address: ipAddress,
					client_user_agent: window?.navigator?.userAgent,
					products: [
						{
							product_id: String(product.productId),
							quantity: 1,
						},
					],
				})
			);

			const addContactData = await sendSendlane(email, firstName, lastName, phone);
			if (!addContactData) {
				setIsLoader(false);
				return;
			}

			// @ts-ignore
			await sendMetaEvent(META_INITCHECKOUT_EVENT, JSON.parse(sessionStorage.getItem("metaPurchaseObjNoor")));
			await sendGABeginCheckout(checkoutGA);

			const dataKonnektive = {
				product1_qty: "1",
				campaignId: strCampaignId,
				product1_id: String(product.productId),
				billShipSame: isBilling,
				emailAddress: email,
				phoneNumber: phone,
				firstName: firstName,
				lastName: lastName,
				address1: billingAddress || deliveryAddress,
				address2: billingAddress2 || deliveryAddress2,
				postalCode: billingZipCode || zipCode,
				city: billingCity || city,
				state: billingState || state,
				country: country,
				shipFirstName: firstName,
				shipLastName: lastName,
				shipAddress1: deliveryAddress,
				shipAddress2: deliveryAddress2,
				shipPostalCode: zipCode,
				shipCity: city,
				shipState: state,
				shipCountry: country,
				sessionId: sessionStorage.getItem("noorSessionId"),
			};

			if (paymentType === "PayPal") {
				Object.assign(dataKonnektive, {
					paySource: "PAYPAL",
					...(paypalData?.paymentSource === "paylater" && { prepaidType: "PAYPAL_PAYLATER" }),
					salesUrl: window.location.href,
					paypalSdk: 1,
					paypalBillerId: "1",
					orderId: sessionStorage.getItem("noorOrderId"),
				});

				const data = await evaluateFetchPost(sendOrderService, dataKonnektive);
				setIsLoader(false);

				return data?.paypalSdkParams?.id;
			} else {
				if (billingFormRef?.current?.validateFields()) {
					const cardsFormData = billingFormRef.current?.getFormData();

					Object.assign(dataKonnektive, {
						paySource: "CREDITCARD",
						redirectsTo: "https://noorhairoffers.com/api/konnective/tools/handleValidate3DSSMS",
						errorRedirectsTo: window.location.origin + BASE_PATH_DYNAMIC_CHECKOUT,
						...(cardsFormData && {
							// @ts-ignore
							cardNumber: String(cardsFormData["cardNumber"]!.value).replaceAll(" ", ""),
							cardMonth: String(cardsFormData["cardExpiration"]!.value).slice(0, 2) || "",
							cardYear: String(cardsFormData["cardExpiration"]!.value).slice(-2) || "",
							cardSecurityCode: String(cardsFormData["cardSecurityCode"]!.value),
						}),
					});

					const data = await evaluateFetchPost(sendOrderService, dataKonnektive);

					if (data) {
						setIsLoader(false);
						if (data?.items && data?.orderId) {
							await sendMetaEvent(
								META_PURCHASE_EVENT,
								// @ts-ignore
								JSON.parse(sessionStorage.getItem("metaPurchaseObjNoor"))
							);
							await sendGAPurchaseEvent({
								transaction_id: data.orderId,
								...checkoutGA,
							});

							sessionStorage.removeItem("metaPurchaseObjNoor");
							sessionStorage.removeItem("GAPurchaseObjNoor");

							location.href = `${window.location.origin}${BASE_PATH_STATIC}/us1?orderId=${data.orderId}`;
						} else {
							alert(
								"Error, pedido no generado. Tarjeta rechazada, por favor realizar nueva compra con otra tarjeta."
							);
						}
					} else {
						setIsLoader(false);
					}
				} else {
					setIsLoader(false);
				}
			}
		} else {
			setIsLoader(false);
			if (topRef.current) {
				const { top } = topRef.current.getBoundingClientRect();
				const scrollToY = window.scrollY + top;
				window.scrollTo({
					top: scrollToY,
					behavior: "smooth",
				});
			}
		}
	};

	const handleExpirationChange = (event?: React.ChangeEvent<HTMLInputElement>) => {
		if (event) {
			const valor = event.target.value;
			let soloNumeros = valor.replace(/\D/g, "");
			const longitud = soloNumeros.length;
			if (longitud > 4) {
				soloNumeros = soloNumeros.slice(0, 4);
			}
			const numerosFormateados = soloNumeros.replace(/\s/g, "").match(/.{1,2}/g);
			const numerosFormateadosFinal = numerosFormateados ? numerosFormateados.join(" / ") : "";
			billingFormRef.current?.setFieldValue("cardExpiration", numerosFormateadosFinal);
		}
	};

	const handleCVVChange = (event?: React.ChangeEvent<HTMLInputElement>) => {
		if (event) {
			const valor = event.target.value;
			let soloNumeros = valor.replace(/\D/g, "");
			const longitud = soloNumeros.length;
			if (longitud > 4) {
				soloNumeros = soloNumeros.slice(0, 4);
			}
			billingFormRef.current?.setFieldValue("cardSecurityCode", soloNumeros);
		}
	};

	const handleCardNumberChange = (event?: React.ChangeEvent<HTMLInputElement>) => {
		if (event) {
			let soloNumeros = event.target.value.replace(/\D/g, "");
			const longitud = soloNumeros.length;
			if (longitud > 16) {
				soloNumeros = soloNumeros.slice(0, 16);
			}
			const numerosFormateados = soloNumeros.replace(/\s/g, "").match(/.{1,4}/g);
			const numerosFormateadosFinal = numerosFormateados ? numerosFormateados.join(" ") : "";
			billingFormRef.current?.setFieldValue("cardNumber", numerosFormateadosFinal);
		}
	};

	const handlePhoneNumberChange = (event?: React.ChangeEvent<HTMLInputElement>) => {
		const valor = event?.target.value;
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
			numeroFormateado = `(${numeroFormateado.slice(0, 3)}) ${numeroFormateado.slice(3, 6)}-${numeroFormateado.slice(
				6,
				10
			)}`;
		} else if (numeroFormateado.length > 3) {
			numeroFormateado = `(${numeroFormateado.slice(0, 3)}) ${numeroFormateado.slice(3)}`;
		} else {
			numeroFormateado = `(${numeroFormateado}`;
		}

		customerFormRef.current?.setFieldValue("phone", numeroFormateado);
	};

	const handleZipCodeChange = (event?: React.ChangeEvent<HTMLInputElement>) => {
		if (event) {
			let soloNumeros = event.target.value.replace(/\D/g, "");
			const longitud = soloNumeros.length;
			if (longitud > 5) {
				soloNumeros = soloNumeros.slice(0, 5);
			}
			deliveryFormRef.current?.setFieldValue("zipCode", soloNumeros);
		}
	};

	const handleZipCodeChangeBilling = (event?: React.ChangeEvent<HTMLInputElement>) => {
		if (event) {
			let soloNumeros = event.target.value.replace(/\D/g, "");
			const longitud = soloNumeros.length;
			if (longitud > 5) {
				soloNumeros = soloNumeros.slice(0, 5);
			}
			billingAddressFormRef.current?.setFieldValue("zipCode", soloNumeros);
		}
	};

	return (
		<div
			className={styles.container}
			ref={topRef}
		>
			{isLoader && <Loader />}
			<div className={styles.left_section}>
				<div className={styles.form_container}>
					<h1 className={styles.title}>
						<span>STEP 1: </span>INFORMACIÓN DEL CLIENTE
					</h1>
					<Form
						ref={customerFormRef}
						containerClassName={styles.customer_form_container}
						formConfig={[
							{ type: "input", identifier: "firstName", topText: "Primer nombre" },
							{ type: "input", identifier: "lastName", topText: "Primer apellido" },
							{ type: "input", identifier: "email", topText: "Correo electrónico" },
							{
								type: "input",
								identifier: "phone",
								topText: "Número de teléfono",
								onInputChange: handlePhoneNumberChange,
							},
							{
								type: "checkbox",
								identifier: "check",
								text: "Me gustaría recibir confirmación y actualizaciones de mi pedido por SMS.",
								isRequired: true,
								initialValue: true,
							},
						]}
					/>
				</div>

				<div className={styles.form_container}>
					<h1 className={styles.title}>
						<span>STEP 2: </span>DIRECCIÓN DE ENTREGA
					</h1>
					<Form
						ref={deliveryFormRef}
						containerClassName={styles.delivery_form_container}
						formConfig={[
							{ type: "input", identifier: "address", topText: "Dirección" },
							{
								type: "input",
								identifier: "apartment",
								topText: "APT, suite, etc. (opcional)",
								isRequired: false,
							},
							{ type: "input", identifier: "city", topText: "Ciudad" },
							{ type: "select", identifier: "state", text: "Estado", selectOptions: USA_STATES },
							{
								type: "input",
								identifier: "zipCode",
								topText: "Código postal",
								onInputChange: handleZipCodeChange,
							},
							{
								type: "select",
								identifier: "country",
								text: "País",
								selectOptions: ["United States"],
								initialValue: "United States",
							},
						]}
					/>
				</div>

				<div className={styles.form_container}>
					<h1 className={styles.title}>
						<span>STEP 3: </span>DIRECCIÓN DE ENVIO
					</h1>
					<Checkbox
						text="La misma que la dirección de envío"
						initialState={true}
						onChange={() => setIsBilling(!isBilling)}
					/>
					{!isBilling && (
						<Form
							ref={billingAddressFormRef}
							containerClassName={styles.delivery_form_container}
							formConfig={[
								{ type: "input", identifier: "address", topText: "Dirección" },
								{
									type: "input",
									identifier: "address2",
									topText: "APT, suite, etc. (opcional)",
									isRequired: false,
								},
								{ type: "input", identifier: "city", topText: "Ciudad" },
								{ type: "select", identifier: "state", text: "Estado", selectOptions: USA_STATES },
								{
									type: "input",
									identifier: "zipCode",
									topText: "Código postal",
									onInputChange: handleZipCodeChangeBilling,
								},
								{
									type: "select",
									identifier: "country",
									text: "País",
									selectOptions: ["United States"],
									initialValue: "United States",
								},
							]}
						/>
					)}
				</div>
			</div>

			<div className={styles.right_section}>
				<div className={styles.form_container}>
					<h1 className={styles.title}>
						<span>STEP 4: </span>INFORMACIÓN DE PAGO
					</h1>
					<div className={styles.billings_forms_container}>
						<div className={styles.checkout_form_container}>
							<div className={styles.header}>
								<p>
									<input
										type="radio"
										name="checkouttype"
										defaultChecked
										onChange={() => setPaymentType("creditcard")}
									/>
									Credit/Debit Card
								</p>
								<div className={styles.card_icons}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										xmlSpace="preserve"
										viewBox="0 0 512 512"
									>
										<path
											d="M512 402.281c0 16.716-13.55 30.267-30.265 30.267H30.265C13.55 432.549 0 418.997 0 402.281V109.717c0-16.716 13.55-30.266 30.265-30.266h451.47c16.716 0 30.265 13.551 30.265 30.266v292.564z"
											style={{ fill: "#fff" }}
										/>
										<path
											d="m113.64 258.035-12.022-57.671c-2.055-7.953-8.035-10.319-15.507-10.632H30.993l-.491 2.635c42.929 10.407 71.334 35.513 83.138 65.668z"
											style={{ fill: "#f79f1a" }}
										/>
										<path
											d="M241.354 190.892h-35.613l-22.242 130.527h35.554zM135.345 321.288l56.01-130.307h-37.691l-34.843 89.028-3.719-13.442c-6.83-16.171-26.35-39.446-49.266-54.098l31.85 108.863 37.659-.044zM342.931 278.75c.132-14.819-9.383-26.122-29.887-35.458-12.461-6.03-20.056-10.051-19.965-16.17 0-5.406 6.432-11.213 20.368-11.213 11.661-.179 20.057 2.367 26.624 5.003l3.218 1.475 4.826-28.277c-7.059-2.637-18.094-5.451-31.895-5.451-35.157 0-59.904 17.691-60.128 43.064-.224 18.763 17.692 29.216 31.181 35.469 13.847 6.374 18.493 10.453 18.404 16.171-.089 8.743-11.035 12.73-21.264 12.73-14.25 0-21.8-1.965-33.509-6.843l-4.55-2.09-4.998 29.249c8.303 3.629 23.668 6.801 39.618 6.933 37.387 0 61.689-17.466 61.957-44.592zM385.233 301.855c4.065 0 40.382.045 45.566.045 1.072 4.545 4.333 19.565 4.333 19.565h33.011L439.33 191.027h-27.472c-8.533 0-14.874 2.323-18.628 10.809l-52.845 119.629h37.392c-.003 0 6.071-16.079 7.456-19.61zm24.389-63.21c-.176.357 2.95-7.549 4.737-12.463l2.411 11.256s6.792 31.182 8.22 37.704h-29.528c2.949-7.504 14.16-36.497 14.16-36.497zM481.735 79.451H30.265C13.55 79.451 0 93.001 0 109.717v31.412h512v-31.412c0-16.716-13.549-30.266-30.265-30.266z"
											style={{ fill: "#059bbf" }}
										/>
										<path
											d="M481.735 432.549H30.265C13.55 432.549 0 418.998 0 402.283v-31.412h512v31.412c0 16.715-13.549 30.266-30.265 30.266z"
											style={{ fill: "#f79f1a" }}
										/>
										<path
											d="M21.517 402.281V109.717c0-16.716 13.551-30.266 30.267-30.266h-21.52C13.55 79.451 0 93.001 0 109.717v292.565c0 16.716 13.55 30.267 30.265 30.267h21.52c-16.716 0-30.268-13.552-30.268-30.268z"
											style={{ opacity: 0.15, fill: "#202121" }}
										/>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										xmlSpace="preserve"
										viewBox="0 0 512 512"
									>
										<path
											d="M488.727 66.494H23.273C10.42 66.494 0 76.914 0 89.767v332.466c0 12.853 10.42 23.273 23.273 23.273h465.454c12.853 0 23.273-10.42 23.273-23.273V89.767c0-12.853-10.42-23.273-23.273-23.273z"
											style={{ fill: "#5286f9" }}
										/>
										<path
											d="M273.776 189.773c5.115 5.86 9.57 12.31 13.236 19.242a100.2 100.2 0 0 1 11.655 46.986c0 16.96-4.228 32.943-11.655 46.986a101.255 101.255 0 0 1-13.236 19.24A101.619 101.619 0 0 1 256 338.296c16.454 11.664 36.523 18.553 58.182 18.553 55.608 0 100.849-45.241 100.849-100.848S369.79 155.152 314.182 155.152c-21.659 0-41.728 6.886-58.182 18.553a101.836 101.836 0 0 1 17.776 16.068z"
											style={{ fill: "#ffb655" }}
										/>
										<path
											d="M287.012 209.016a101.206 101.206 0 0 0-13.236-19.242A101.706 101.706 0 0 0 256 173.708c-16.452-11.667-36.523-18.553-58.182-18.553-55.608 0-100.848 45.241-100.848 100.848s45.241 100.848 100.848 100.848c21.659 0 41.73-6.887 58.182-18.553a101.719 101.719 0 0 0 17.776-16.067c5.115-5.86 9.57-12.31 13.236-19.24a100.212 100.212 0 0 0 11.655-46.986 100.2 100.2 0 0 0-11.655-46.989z"
											style={{ fill: "#d8143a" }}
										/>
										<path
											d="M197.818 356.851c-55.608 0-100.848-45.241-100.848-100.848s45.241-100.848 100.848-100.848c21.659 0 41.728 6.886 58.182 18.553V66.494H23.273C10.42 66.494 0 76.914 0 89.767v332.466c0 12.853 10.42 23.273 23.273 23.273H256v-107.21c-16.454 11.666-36.523 18.555-58.182 18.555z"
											style={{ fill: "#3d6deb" }}
										/>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										xmlSpace="preserve"
										viewBox="0 0 291.764 291.764"
									>
										<path
											d="M18.235 41.025h255.294c10.066 0 18.235 8.169 18.235 18.244v173.235c0 10.066-8.169 18.235-18.235 18.235H18.235C8.16 250.74 0 242.57 0 232.505V59.269c0-10.075 8.169-18.244 18.235-18.244z"
											style={{ fill: "#26a6d1" }}
										/>
										<path
											d="m47.047 113.966-28.812 63.76h34.492l4.276-10.166h9.774l4.276 10.166h37.966v-7.759l3.383 7.759h19.639l3.383-7.923v7.923h78.959l9.601-9.902 8.99 9.902 40.555.082-28.903-31.784 28.903-32.058h-39.926l-9.346 9.719-8.707-9.719h-85.897l-7.376 16.457-7.549-16.457h-34.42v7.495l-3.829-7.495H47.047zm6.674 9.054h16.813l19.111 43.236V123.02h18.418l14.761 31 13.604-31h18.326v45.752h-11.151l-.091-35.851-16.257 35.851h-9.975l-16.348-35.851v35.851h-22.94l-4.349-10.257H50.147l-4.34 10.248H33.516l20.205-45.743zm111.235 0h45.342L224.166 138l14.315-14.98h13.868l-21.071 22.995 21.071 22.73h-14.497l-13.868-15.154-14.388 15.154h-44.64V123.02zM61.9 130.761l-7.741 18.272h15.473L61.9 130.761zm114.253 1.732v8.352h24.736v9.309h-24.736v9.118h27.745l12.892-13.43-12.345-13.357h-28.292v.008z"
											style={{ fill: "#fff" }}
										/>
									</svg>
								</div>
							</div>
							{paymentType === "creditcard" && (
								<Form
									ref={billingFormRef}
									containerClassName={styles.billing_form_content}
									formConfig={[
										{
											type: "input",
											identifier: "cardNumber",
											topText: "Número de tarjeta",
											onInputChange: handleCardNumberChange,
										},
										{
											type: "input",
											identifier: "cardExpiration",
											topText: "MM/YY",
											onInputChange: handleExpirationChange,
										},
										{
											type: "input",
											identifier: "cardSecurityCode",
											topText: "CVV",
											onInputChange: handleCVVChange,
										},
									]}
								/>
							)}
						</div>
						<div className={styles.checkout_form_container}>
							<div className={styles.header}>
								<p>
									<input
										type="radio"
										name="checkouttype"
										onChange={() => setPaymentType("paypal")}
									/>
									PayPal
								</p>
							</div>
							{paymentType === "paypal" && (
								<>
									<div className={styles.paypal_container}>
										<PayPalScriptProvider options={initialOptions}>
											<PayPalButtons
												style={stylesPaypal}
												onClick={(data) =>
													handleClickPaypal(
														data,
														customerFormRef,
														deliveryFormRef,
														topRef,
														product.productId
													)
												}
												createOrder={(data) => handleOrder(data, "PayPal")}
												onApprove={onApprovePaypal}
												onCancel={onCancelPaypal}
												onError={onErrorPaypal}
											/>
										</PayPalScriptProvider>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
				<img
					src={nortonImg}
					alt="Secure"
				/>
				<div className={styles.product_card}>
					<p>
						<span>
							<b>Producto</b>
						</span>
						<span>
							<b>Precio</b>
						</span>
					</p>
					<p>
						<span style={{ textAlign: "left" }}>{product.productName}</span>
						<span>${product.price}</span>
					</p>
					<p>
						<span>Promoción Cliente Nuevo - Ahorras:</span>
						<span>-${product.newCustomerDiscount}</span>
					</p>
					<p>
						<span>Envío:</span>
						<span>${product.shippingPrice}</span>
					</p>
					<p>
						<span>
							<b>Total</b>
						</span>
						<span>${(Number(product.price) + Number(product.shippingPrice)).toFixed(2)}</span>
					</p>
				</div>
				<button
					className={styles.button}
					disabled={paymentType === "paypal"}
					onClick={() => handleOrder(null, "CreditCard")}
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
}
