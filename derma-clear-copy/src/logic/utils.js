import { GA_PURCHASE_EVENT, GA_PAGE_VIEW, GA_ADD_TO_CART, GA_BEGINCHECKOUT_EVENT } from "@logic/consts";

export const convertJSONToQueryParamsString = (jsonData) => {
    let queryParams = "";
    Object.keys(jsonData).map((key, i) => {
        const value = jsonData[key];
        queryParams += i == 0 ? "?" : "&";
        queryParams += `${key}=${value}`
    })
    return queryParams;
};

export const evaluateFetchPost = async (fetchingFunction, dataToSend) => {
    const response = await fetchingFunction(dataToSend);
    if ('error' in response) {
        console.error("ERROR TO MAKE FETCH: ", response.error)
        return undefined;
    } else {
        const responseData = response?.data;
        if (responseData?.result === "ERROR") {
            console.error("ERROR FROM API: ", responseData.message);
            alert(responseData.message);
            return undefined;
        }

        if (responseData?.result === "MERC_REDIRECT") {
            if (responseData?.message && responseData.message?.url) {
                window.location.href = responseData.message.url;
            } else if (responseData?.message && responseData.message?.script) {
                eval(responseData.message.script);
            }
        } else {
            return responseData?.message;
        }
    }
}

export const sendGAPurchaseEvent = (purchaseEvent) => {
    const items = purchaseEvent.items.map((item) => ({
        item_id: item.item_id,
        item_name: item.item_name,
        quantity: item.quantity,
    }));

    window.gtag("event", GA_PURCHASE_EVENT, {
        transaction_id: purchaseEvent.transaction_id,
        value: purchaseEvent.value,
        currency: "USD",
        items: items,
    });
};

export const sendGABeginCheckout = (beginCheckoutEvent) => {
    const items = beginCheckoutEvent.items.map((item) => ({
        item_id: item.item_id,
        item_name: item.item_name,
        quantity: item.quantity,
    }));

    window?.gtag("event", GA_BEGINCHECKOUT_EVENT, {
        value: beginCheckoutEvent.value,
        currency: "USD",
        items: items,
    });
};

export const sendGAAddToCart = (addToCartEvent) => {
    const items = addToCartEvent.items.map((item) => ({
        item_id: item.item_id,
        item_name: item.item_name,
        quantity: item.quantity,
    }));

    window.gtag("event", GA_ADD_TO_CART, {
        value: addToCartEvent.value,
        currency: "USD",
        items: items,
    });
};

export const sendGAPageView = () => {
    window.gtag("event", GA_PAGE_VIEW, {
        page_location: window.location.href
    });
};