import { GenericObject } from "@appTypes/types";
import { FetchOutput } from "@appTypes/fetching.types";
import { sendMetaService } from "@logic/services";
import { GA_CLICK_EVENT, GA_PURCHASE_EVENT } from "@logic/consts";
import { PurchaseEvent, EventData } from "@appTypes/types";
import { sha256 } from 'js-sha256';


///Funcion que convierte un json a un string de query params
export const convertJSONToQueryParamsString = <TValue = string>(jsonData: GenericObject<TValue>): string => {
	let queryParams = "";
	Object.keys(jsonData).map((key, i) => {
		const value = jsonData[key];
		queryParams += i == 0 ? "?" : "&";
		queryParams += `${key}=${value}`;
	});
	return queryParams;
};

//funcion para evaluar las respuestas de un servicio.
export const evaluateFetchPost = async <TDataToSend, TPayload>(
	fetchingFunction: (dataToSend: TDataToSend) => Promise<FetchOutput<TPayload>>,
	dataToSend: TDataToSend
): Promise<TPayload | undefined> => {
	const response = await fetchingFunction(dataToSend);
	if ("error" in response) {
		console.error(response.error);
		alert(`FAILED TO FETCH FROM CLIENT SIDE`);
		return undefined;
	} else {
		if (response.data.result === "ERROR") {
			console.error(response.data.message);
			alert(`ERROR: ${response.data.message}`);
			return undefined;
		}

		if (response.data.result === "MERC_REDIRECT") {
			if (response.data.message && response.data.message.url) {
				window.location.href = response.data.message.url;
			} else if (response.data.message && response.data.message.script) {
				eval(response.data.message.script);
			}
		} else {
			return response.data.message;
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

export const sendMetaClickEvent = (): void => {
	//@ts-ignore
	fbq("track", "click");
};

export const sendMetaEvent = async (event: string, eventData: EventData): Promise<void> => {
	const fechaNacimientoResponse = sha256("19970216");
	const externalIdResponse = sha256("welcome-bundle");

	evaluateFetchPost(sendMetaService, {
		event_name: event,
		event_time: Math.floor(Date.now() / 1000),
		user_data: {
			fbp: document.cookie.replace(new RegExp(`(?:(?:^|.*;\\s*)${"_fbp"}\\s*\\=\\s*([^;]*).*$)|^.*$`), "$1"),
			fbc: document.cookie.replace(new RegExp(`(?:(?:^|.*;\\s*)${"_fbp"}\\s*\\=\\s*([^;]*).*$)|^.*$`), "$1"),
			db: fechaNacimientoResponse,
			external_id: externalIdResponse,
			fb_login_id: "12121212",
			client_user_agent: eventData.client_user_agent,
			client_ip_address: eventData.client_ip_address
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
		event_source_url: location.href
	});
}

export const sendMetaAddToCarEvent = (): void => {
	//@ts-ignore
	fbq("track", "AddToCart");
};

export const sendMetaInitCheckout = (): void => {
	//@ts-ignore
	fbq("track", "InitiateCheckout");
};