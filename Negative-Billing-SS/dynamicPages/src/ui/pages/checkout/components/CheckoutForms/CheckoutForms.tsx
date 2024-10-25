import styles from "./CheckoutForms.styles.module.scss";
import { useEffect, useRef, useState } from "react";
import { FormRef } from "@appTypes/forms.types";
import { evaluateFetchPost, sendGAPurchaseEvent } from "@logic/utils";

import {
	sendOrderService,
	addContactToListService,
	validateAddressService,
	getProductByIdService,
} from "@logic/services";

import {
	BASE_PATH_DYNAMIC,
	USA_STATES,
	USA_STATES_CODES,
	CAMPAING_ID,
	SENDLANE_LIST_ID,
	ERRORS_STRING,
	SENDLANE_LIST_ABANDONEND_CHECKOUT_ID
} from "@logic/consts";

import { Loader, Form } from "@sharedUI";

import useLeavePageDetector from "@logic/hooks/LavePageDetector";

const url = new URLSearchParams(window.location.search);

export default function CheckoutForms() {
	const [isLoader, setIsLoader] = useState(false);
	const [loaderText, setLoaderText] = useState("");
	const [isRecurring, setIsRecurring] = useState(false);

	const [paymentType, setPaymentType] = useState<"card" | "paypal">("card");
	const topRef = useRef<HTMLDivElement | null>(null);

	const contactFormRef = useRef<FormRef | null>(null);
	const deliveryFormRef = useRef<FormRef | null>(null);
	const cardsFormRef = useRef<FormRef | null>(null);
	const billingFormRef = useRef<FormRef | null>(null);

	const [isBilling, setIsBilling] = useState(false);

	const { addListener, removeListener } = useLeavePageDetector(async () => {
		const contactFormData = contactFormRef.current?.getFormData();
		const deliveryFormData = deliveryFormRef.current?.getFormData();
		//send to sendlane
		if (contactFormData && deliveryFormData) {
			const email = contactFormData["email"]?.value;
			const firstName = deliveryFormData["firstName"]?.value;
			const lastName = deliveryFormData["lastName"]?.value;
			if (email && firstName) {
				const dataToSend = {
					email: String(email),
					firstName: String(firstName),
					lastName: String(lastName),
					sendlaneListId: SENDLANE_LIST_ABANDONEND_CHECKOUT_ID,
				};
				await evaluateFetchPost(addContactToListService, dataToSend);
			}
		}
	});

	addListener();

	useEffect(() => {
		const productId = url.get("productId");
		if (!productId) location.href = location.origin;
		evaluateFetchPost(getProductByIdService, {
			productId: Number(productId),
			campaignId: Number(CAMPAING_ID),
		}).then((data) => {
			if (data) {
				if (data.data[0].fulfillmentCycleType === "RECURRING") setIsRecurring(true);
			}
		});
	}, []);

	const onSubmit = async () => {
		let isValid = true;

		setIsLoader(true);
		setLoaderText("Procesing order...");

		if (!(contactFormRef.current && contactFormRef.current.validateFields())) isValid = false;
		if (!(deliveryFormRef.current && deliveryFormRef.current.validateFields())) isValid = false;
		if (paymentType === "card" && !(cardsFormRef.current && cardsFormRef.current.validateFields())) isValid = false;
		if (isBilling && !(billingFormRef.current && billingFormRef.current.validateFields())) isValid = false;

		if (isValid) {
			const productId = url.get("productId");

			const contactFormData = contactFormRef.current?.getFormData();
			const deliveryFormData = deliveryFormRef.current?.getFormData();
			const cardsFormData = cardsFormRef.current?.getFormData();
			const billingFormData = billingFormRef.current?.getFormData();

			if (contactFormData && deliveryFormData) {
				//validar que el domicilio de envio sea valido
				const validateAddressData = await evaluateFetchPost(validateAddressService, {
					street: String(deliveryFormData["address"]!.value),
					city: String(deliveryFormData["city"]!.value),
					state: USA_STATES_CODES.find((state) => state.name === String(deliveryFormData["state"]!.value))!.code,
					zipcode: String(deliveryFormData["zipCode"]!.value),
				});

				if (!validateAddressData) {
					setIsLoader(false);
					deliveryFormRef.current?.makeFieldAsError("address", ERRORS_STRING.addressInvalid);
					deliveryFormRef.current?.makeFieldAsError("city", ERRORS_STRING.addressInvalid);
					deliveryFormRef.current?.makeFieldAsError("state", ERRORS_STRING.addressInvalid);
					deliveryFormRef.current?.makeFieldAsError("zipCode", ERRORS_STRING.addressInvalid);
					if (topRef.current) {
						const { top } = topRef.current.getBoundingClientRect();
						const scrollToY = window.scrollY + top;
						window.scrollTo({
							top: scrollToY,
							behavior: "smooth",
						});
					}
					return;
				}

				//si viene el billing, validar que el domicilio de biling sea valido
				if (isBilling && billingFormData) {
					const validateAddressBillingData = await evaluateFetchPost(validateAddressService, {
						street: String(billingFormData["address"]!.value),
						city: String(billingFormData["city"]!.value),
						state: USA_STATES_CODES.find((state) => state.name === String(billingFormData["state"]!.value))!.code,
						zipcode: String(billingFormData["zipCode"]!.value),
					});

					if (!validateAddressBillingData) {
						setIsLoader(false);
						billingFormRef.current?.makeFieldAsError("address", ERRORS_STRING.addressInvalid);
						billingFormRef.current?.makeFieldAsError("city", ERRORS_STRING.addressInvalid);
						billingFormRef.current?.makeFieldAsError("state", ERRORS_STRING.addressInvalid);
						billingFormRef.current?.makeFieldAsError("zipCode", ERRORS_STRING.addressInvalid);
						if (topRef.current) {
							const { top } = topRef.current.getBoundingClientRect();
							const scrollToY = window.scrollY + top;
							window.scrollTo({
								top: scrollToY,
								behavior: "smooth",
							});
						}
						return;
					}
				}

				const isMailAccepted = Boolean(contactFormData["sendmeMail"]!.value);
				const isPhoneAccepted = Boolean(deliveryFormData["sendmePhone"]!.value);

				//send to sendlane
				if (isMailAccepted) {
					const dataToSend = {
						email: String(contactFormData["email"]!.value),
						firstName: String(deliveryFormData["firstName"]!.value),
						lastName: String(deliveryFormData["lastName"]!.value),
						sendlaneListId: SENDLANE_LIST_ID,
						...(isPhoneAccepted && {
							phone: `+1${String(deliveryFormData["phone"]!.value)}`,
						}),
					};

					const addContactdata = await evaluateFetchPost(addContactToListService, dataToSend);

					if (!addContactdata) {
						setIsLoader(false);
						return;
					}
				}

				const userData = isBilling && billingFormData ? billingFormData : deliveryFormData;

				//send to konnective
				const dataToSend = {
					//product data
					product1_qty: "1",
					campaignId: CAMPAING_ID,
					product1_id: productId || "",

					//aditional user data
					emailAddress: String(contactFormData["email"]!.value),
					phoneNumber: String(deliveryFormData["phone"]!.value),

					//user data
					firstName: String(userData["firstName"]!.value),
					lastName: String(userData["lastName"]!.value),
					address1: String(userData["address"]!.value),
					address2: String(userData["apartment"]!.value),
					postalCode: String(userData["zipCode"]!.value),
					city: String(userData["city"]!.value),
					state: USA_STATES_CODES.find((state) => state.name === String(userData["state"]!.value))!.code,
					country: "US",

					//shipment data
					shipFirstName: String(deliveryFormData["firstName"]!.value),
					shipLastName: String(deliveryFormData["lastName"]!.value),
					shipAddress1: String(deliveryFormData["address"]!.value),
					shipAddress2: String(deliveryFormData["apartment"]!.value),
					shipPostalCode: String(deliveryFormData["zipCode"]!.value),
					shipCity: String(deliveryFormData["city"]!.value),
					shipState: USA_STATES_CODES.find((state) => state.name === String(deliveryFormData["state"]!.value))!
						.code,
					shipCountry: "US",
					paySource: paymentType === "card" ? "CREDITCARD" : "PAYPAL",
					...(paymentType === "card" && cardsFormData
						? {
								cardNumber: String(cardsFormData["cardNumber"]!.value),
								cardMonth: String(cardsFormData["cardExpiration"]!.value).slice(0, 2) || "",
								cardYear: String(cardsFormData["cardExpiration"]!.value).slice(-2) || "",
								cardSecurityCode: String(cardsFormData["cardSecurityCode"]!.value),
						  }
						: {
								paypalBillerId: "1",
								salesUrl: `${window.location.origin}${BASE_PATH_DYNAMIC}/paypal/${productId}`,
						  }),
				};

				const data = await evaluateFetchPost(sendOrderService, dataToSend);

				if (data) {
					if (data.items) {
						sendGAPurchaseEvent({
							transaction_id: data.orderId,
							value: data.totalAmount,
							currency: data.currencyCode,
							items: data.items.map((item) => {
								return {
									item_id: item.productId,
									item_name: item.name,
									quantity: item.qty,
								};
							}),
						});
						
						removeListener();
						setTimeout(() => {
							location.href = window.location.origin + BASE_PATH_DYNAMIC + "/us1?orderId=" + data.orderId;
						}, 1000);
					}
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

	const onIsBillingChange = (state: boolean) => setIsBilling(!state);

	return (
		<>
			{isLoader && <Loader text={loaderText} />}
			<div
				className={styles.form_container}
				ref={topRef}
			>
				<h1 className={styles.title}>Contact</h1>
				<Form
					ref={contactFormRef}
					containerClassName={styles.contact_form}
					formConfig={[
						{ type: "input", identifier: "email", topText: "Email", inputType: "email" },
						{
							type: "checkbox",
							identifier: "sendmeMail",
							text: "Email me with news and offers",
							initialValue: true,
							isRequired: true,
						},
					]}
				/>
			</div>

			<div className={styles.form_container}>
				<h1 className={styles.title}>Delivery</h1>
				<Form
					ref={deliveryFormRef}
					containerClassName={styles.delivery_form}
					formConfig={[
						{
							type: "select",
							identifier: "country",
							text: "Country/Region",
							selectOptions: ["United States"],
							initialValue: "United States",
						},
						{ type: "input", identifier: "firstName", topText: "First name" },
						{ type: "input", identifier: "lastName", topText: "Last name" },
						{ type: "input", identifier: "address", topText: "Address" },
						{
							type: "input",
							identifier: "apartment",
							topText: "Apartment, suite, etc. (optional)",
							isRequired: false,
						},
						{ type: "input", identifier: "city", topText: "City" },
						{ type: "select", identifier: "state", text: "State", selectOptions: USA_STATES },
						{ type: "input", identifier: "zipCode", topText: "ZIP code", inputType: "number" },
						{ type: "input", identifier: "phone", topText: "Phone", inputType: "number" },
						{ type: "checkbox", identifier: "sendmePhone", text: "Send me special offers through text*" },
					]}
				/>
			</div>

			<div className={styles.form_container}>
				<h1 className={styles.title}>Payment</h1>
				<p>All transactions are secure and encrypted.</p>

				<div className={styles.payments_types_container}>
					<div className={styles.payments_custom_form}>
						<div
							className={
								styles.head +
								" " +
								styles.head_circled +
								" " +
								(paymentType === "card" ? styles.head_border_blue : styles.head_border_gray)
							}
						>
							<div className={styles.radio_button_container}>
								<input
									type="radio"
									name="payment_type"
									defaultChecked
									onChange={() => setPaymentType("card")}
								/>
								<p>Credit card</p>
							</div>
							<div className={styles.adquirientes_container}>
								<img
									src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg"
									alt=""
								/>
								<img
									src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/ae9ceec48b1dc489596c.svg"
									alt=""
								/>
								<img
									src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/f11b90c2972f3811f2d5.svg"
									alt=""
								/>
								<img
									src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/4cde67b4ecfa33d21851.svg"
									alt=""
								/>
							</div>
						</div>

						<div className={styles.payment_form}>
							<Form
								ref={cardsFormRef}
								containerClassName={styles.cards_data_container}
								formConfig={[
									{ type: "input", identifier: "cardNumber", topText: "Card number", inputType: "number" },
									{ type: "input", identifier: "cardExpiration", topText: "Expiration date (MM / YY)" },
									{
										type: "input",
										identifier: "cardSecurityCode",
										topText: "Security code",
										inputType: "number",
									},
									{ type: "input", identifier: "cardName", topText: "Name on card" },
									{
										type: "checkbox",
										identifier: "isBilling",
										text: "Use shipping address as billing address",
										initialValue: true,
										onChange: onIsBillingChange,
									},
								]}
							/>

							{isBilling && (
								<div className={styles.form_container}>
									<h1 className={styles.title}>Billing</h1>
									<Form
										ref={billingFormRef}
										containerClassName={styles.delivery_form}
										formConfig={[
											{
												type: "select",
												identifier: "country",
												text: "Country/Region",
												selectOptions: ["United States"],
												initialValue: "United States",
											},
											{ type: "input", identifier: "firstName", topText: "First name" },
											{ type: "input", identifier: "lastName", topText: "Last name" },
											{ type: "input", identifier: "address", topText: "Address" },
											{
												type: "input",
												identifier: "apartment",
												topText: "Apartment, suite, etc. (optional)",
												isRequired: false,
											},
											{ type: "input", identifier: "city", topText: "City" },
											{ type: "select", identifier: "state", text: "State", selectOptions: USA_STATES },
											{ type: "input", identifier: "zipCode", topText: "ZIP code", inputType: "number" },
											{ type: "input", identifier: "phone", topText: "Phone", inputType: "number" },
										]}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			{isRecurring && (
				<span className={styles.final_paragraph}>
					One or more items in your cart is a deferred or recurring purchase. By continuing with your payment, you
					agree that your payment method will automatically be charged at the price and frequency listed on this
					page until it ends or you cancel. All cancellations are subject to the{" "}
					<a href="https://noorhairofficial.com/pages/subscription-policy">cancellation policy.</a>
				</span>
			)}

			<button
				onClick={onSubmit}
				className={styles.submit_button}
			>
				Submit My Order 🎉
			</button>

			<div className={styles.last_section}>
				<span>
					Need help?{" "}
					<a href="https://noorhairofficial.com/pages/faqs-contact-us-1?_gl=1*1ba7lv5*_gcl_au*MTA1ODEwNjk4Ny4xNzE3MTIzOTk1*_ga*MTg5NzQ3OTExOS4xNzE3MTIzOTk1*_ga_XH7Z0EZZYZ*MTcxOTYxMzU4Ny4xMy4xLjE3MTk2MTUyNDguNjAuMC4xNjkyNTA5MjUz">
						Contact us
					</a>
				</span>
				<div className={styles.link_container}>
					<a href="https://noorhairofficial.com/pages/returns-refunds">Refund Policy</a>
					<a href="https://noorhairofficial.com/pages/privacy-policy ">Privacy Policy</a>
					<a href="https://noorhairofficial.com/pages/terms-of-service-new ">Terms of Service</a>
				</div>
			</div>
		</>
	);
}
