import { MutableRefObject, RefObject } from "react";
import { CAMPAING_ID, ERRORS_STRING, USA_STATES_CODES, SENDLANE_LIST_ID } from "@logic/consts";
import { evaluateFetchPost } from "@logic/utils";
import { sendLeadService, validateAddressService, addContactToListService } from "@logic/services";
import { FormRef } from "@ui/types/forms.types";
import { checkoutForm, paypalData } from "./CheckoutContent.protypes";

export const getCheckoutClientFormValues = async (
	customerFormRef: RefObject<FormRef>,
	deliveryFormRef: RefObject<FormRef>,
	topRef: RefObject<HTMLDivElement>,
	billingAddressFormRef: null | false | MutableRefObject<FormRef>
): Promise<checkoutForm | undefined> => {
	let isValid = true;
	if (!customerFormRef?.current?.validateFields()) isValid = false;
	if (!deliveryFormRef?.current?.validateFields()) isValid = false;
	if (isValid) {
		const contactFormData = customerFormRef.current?.getFormData();
		const deliveryFormData = deliveryFormRef.current?.getFormData();
		const billingFormData = billingAddressFormRef && billingAddressFormRef?.current?.getFormData();

		if (contactFormData && deliveryFormData) {
			const firstName = String(contactFormData["firstName"]!.value);
			const lastName = String(contactFormData["lastName"]!.value);
			const email = String(contactFormData["email"]!.value);
			const deliveryAddress = String(deliveryFormData["address"]!.value);
			const deliveryAddress2 = String(deliveryFormData["apartment"]!.value);
			const phone = String(contactFormData["phone"]!.value).replace(/\D/g, "");
			const city = String(deliveryFormData["city"]!.value);
			const zipCode = String(deliveryFormData["zipCode"]!.value);
			const state = USA_STATES_CODES.find((state) => state.name === String(deliveryFormData["state"]!.value))!.code;
			const country = "US";

			const validateAddressData = await evaluateFetchPost(validateAddressService, {
				street: deliveryAddress,
				city: city,
				state: state,
				zipcode: zipCode,
			});

			if (!validateAddressData) {
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
			if (billingFormData) {
				const validateAddressBillingData = await evaluateFetchPost(validateAddressService, {
					street: String(billingFormData["address"]!.value),
					city: String(billingFormData["city"]!.value),
					state: USA_STATES_CODES.find((state) => state.name === String(billingFormData["state"]!.value))!.code,
					zipcode: String(billingFormData["zipCode"]!.value),
				});

				if (!validateAddressBillingData && billingAddressFormRef) {
					billingAddressFormRef.current?.makeFieldAsError("address", ERRORS_STRING.addressInvalid);
					billingAddressFormRef.current?.makeFieldAsError("city", ERRORS_STRING.addressInvalid);
					billingAddressFormRef.current?.makeFieldAsError("state", ERRORS_STRING.addressInvalid);
					billingAddressFormRef.current?.makeFieldAsError("zipCode", ERRORS_STRING.addressInvalid);
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

			return {
				firstName,
				lastName,
				email,
				phone,
				deliveryAddress,
				deliveryAddress2,
				city,
				state,
				zipCode,
				country,
				...(billingFormData && {
					billingAddress: String(billingFormData["address"]!.value),
					billingAddress2: String(billingFormData["address2"]!.value),
					billingCity: String(billingFormData["city"]!.value),
					billingZipCode: String(billingFormData["zipCode"]!.value),
					billingState: USA_STATES_CODES.find((state) => state.name === String(billingFormData["state"]!.value))!
						.code,
				}),
			};
		}
	} else {
		return;
	}
};

export const handleClickPaypal = async (
	paypalData: paypalData | Record<string, unknown>,
	customerFormRef: RefObject<FormRef>,
	deliveryFormRef: RefObject<FormRef>,
	topRef: RefObject<HTMLDivElement>,
	productId: number
) => {
	const checkoutFormData = await getCheckoutClientFormValues(customerFormRef, deliveryFormRef, topRef, null);
	if (checkoutFormData) {
		const { email, firstName, lastName, phone, deliveryAddress, deliveryAddress2, zipCode, city, state, country } =
			checkoutFormData;

		await evaluateFetchPost(sendLeadService, {
			product1_qty: "1",
			campaignId: String(CAMPAING_ID),
			product1_id: String(productId),
			firstName: firstName,
			lastName: lastName,
			sessionId: sessionStorage.getItem("noorSessionId"),
			phoneNumber: phone,
			emailAddress: email,
			address1: firstName,
			address2: lastName,
			postalCode: zipCode,
			city: city,
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
			paySource: "PAYPAL",
			...(paypalData?.paymentSource === "paylater" && { prepaidType: "PAYPAL_PAYLATER" }),
			salesUrl: window.location.href,
			paypalSdk: 1,
			paypalBillerId: "1",
		}).then((data) => {
			if (data?.orderId) {
				sessionStorage.setItem("noorOrderId", data.orderId);
			} else {
				console.warn("Konnektive session id is not generated");
			}
		});
	}
};

export const onCancelPaypal = () => {
	console.warn("Payment is cancelled");
	return "";
};

export const onErrorPaypal = () => {
	alert("Aparece un error inesperado, inténtelo nuevamente más tarde o utilice otro método de pago.");
	return "";
};

export const sendSendlane = async (email: string, firstName: string, lastName: string, phone: string) => {
	const result = await evaluateFetchPost(addContactToListService, {
		email,
		firstName,
		lastName,
		phone: `+1${phone}`,
		sendlaneListId: SENDLANE_LIST_ID,
	});

	return result;
};
