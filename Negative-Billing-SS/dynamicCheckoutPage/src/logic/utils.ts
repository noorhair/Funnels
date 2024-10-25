import { GenericObject } from "@appTypes/types";
import { FetchOutput } from "@appTypes/fetching.types";
import { sendMetaService } from "@logic/services";
import { GA_CLICK_EVENT, GA_PURCHASE_EVENT, GA_BEGINCHECKOUT_EVENT, GA_ADD_TO_CART } from "@logic/consts";
import { PurchaseEvent, EventData, BeginCheckoutEvent, AddToCartEvent } from "@appTypes/types";
import { sha256 } from 'js-sha256';

export const convertJSONToQueryParamsString = <TValue = string>(jsonData: GenericObject<TValue>): string => {
	let queryParams = "";
	Object.keys(jsonData).map((key, i) => {
		const value = jsonData[key];
		queryParams += i == 0 ? "?" : "&";
		queryParams += `${key}=${value}`;
	});
	return queryParams;
};

export const evaluateFetchPost = async <TDataToSend, TPayload>(
	fetchingFunction: (dataToSend: TDataToSend) => Promise<FetchOutput<TPayload>>,
	dataToSend: TDataToSend
): Promise<TPayload | undefined> => {
	const response = await fetchingFunction(dataToSend);
	if ("error" in response) {
		console.error("ERROR TO MAKE FETCH: ", response.error);
		return undefined;
	} else {
		const responseData = response.data;
		if (responseData.result === "ERROR") {
			console.error("ERROR FROM API: ", responseData.message);
			alert(responseData.message);
			return undefined;
		}

		if (responseData.result === "MERC_REDIRECT") {
			if (responseData.message && responseData.message.url) {
				window.location.href = responseData.message.url;
			} else if (responseData.message && responseData.message.script) {
				eval(responseData.message.script);
			}
		} else {
			return responseData.message;
		}
	}
};

export const sendGAClickEvent = (): void => {
	//@ts-ignore
	window.gtag("event", GA_CLICK_EVENT, {
		category: "Button click",
		action: GA_CLICK_EVENT,
	});
};

export const sendGAPurchaseEvent = (purchaseEvent: PurchaseEvent): void => {
	const items = purchaseEvent.items.map((item) => ({
		item_id: item.item_id,
		item_name: item.item_name,
		quantity: item.quantity,
	}));
	//@ts-ignore
	window.gtag("event", GA_PURCHASE_EVENT, {
		transaction_id: purchaseEvent.transaction_id,
		value: purchaseEvent.value,
		currency: "USD",
		items: items,
	});
};

export const sendGABeginCheckout = (beginCheckoutEvent: BeginCheckoutEvent): void => {
	const items = beginCheckoutEvent.items.map((item) => ({
		item_id: item.item_id,
		item_name: item.item_name,
		quantity: item.quantity,
	}));
	//@ts-ignore
	window.gtag("event", GA_BEGINCHECKOUT_EVENT, {
		value: beginCheckoutEvent.value,
		currency: "USD",
		items: items,
	});
};

export const sendGAAddToCart = (addToCartEventEvent: AddToCartEvent): void => {
	const items = addToCartEventEvent.items.map((item) => ({
		item_id: item.item_id,
		item_name: item.item_name,
		quantity: item.quantity,
	}));
	//@ts-ignore
	window.gtag("event", GA_ADD_TO_CART, {
		value: addToCartEventEvent.value,
		currency: "USD",
		items: items,
	});
};

export const sendMetaClickEvent = (): void => {
	//@ts-ignore
	fbq("track", "click");
};

export const sendMetaEvent = async (event: string, eventData: EventData): Promise<void> => {
	const emailResponse = sha256(eventData.email);
	const phoneResponse = sha256(eventData.phone);
	const nombreResponse = sha256(eventData.nombre);
	const apellidoResponse = sha256(eventData.apellido);
	const ciudadResponse = sha256(eventData.ciudad);
	const estadoResponse = sha256(eventData.estado);
	const codigoPostalResponse = sha256(eventData.codigoPostal);
	const paisResponse = sha256(eventData.pais);
	const generoResponse = sha256(eventData.phone);
	const fechaNacimientoResponse = sha256("19970216");
	const externalIdResponse = sha256("welcome-bundle");

	await evaluateFetchPost(sendMetaService, {
		event_name: event,
		event_time: Math.floor(Date.now() / 1000),
		user_data: {
			em: emailResponse,
			ph: phoneResponse,
			fbp: document.cookie.replace(new RegExp(`(?:(?:^|.*;\\s*)${"_fbp"}\\s*\\=\\s*([^;]*).*$)|^.*$`), "$1"),
			fbc: document.cookie.replace(new RegExp(`(?:(?:^|.*;\\s*)${"_fbp"}\\s*\\=\\s*([^;]*).*$)|^.*$`), "$1"),
			fn: nombreResponse,
			ln: apellidoResponse,
			ct: ciudadResponse,
			st: estadoResponse,
			zp: codigoPostalResponse,
			country: paisResponse,
			ge: generoResponse,
			db: fechaNacimientoResponse,
			external_id: externalIdResponse,
			fb_login_id: "12121212",
			client_user_agent: eventData.client_user_agent,
			client_ip_address: eventData.client_ip_address,
		},
		custom_data: {
			currency: "usd",
			value: eventData.value,
			contents: eventData.products.map((product) => ({
				id: product.product_id,
				quantity: product.quantity,
			})),
		},
		action_source: "website",
		event_source_url: location.href,
	});
};

export const sendMetaInitCheckout = (): void => {
	//@ts-ignore
	fbq("track", "InitiateCheckout");
};