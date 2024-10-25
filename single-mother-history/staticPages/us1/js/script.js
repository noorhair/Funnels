import { sha256 } from "./sha256.js";
var API_URL = "https://noorhairoffers.com/api/konnective";
var BASE_PATH_STATIC = "/dev3";

var ORDER_ID = new URLSearchParams(window.location.search).get('orderId');
if (!ORDER_ID) window.location.href = window.location.origin + BASE_PATH_STATIC;

const META_PIXEL = "1475751443365083";
const META_TOKEN = "EAAZBmR1krwZAkBO8vMlEdgChLOZBHNqkqPSVCacOZB63rdqJmdnjqnAUuTwgb1wUEGn9sV5aRKCuZBGZBv4ZC0YSQSJoRtyNZCgRr7GNjZCgY1BAMieqLRqaf3vsevDeTlZBWQdH3HyNKFXOaZBhkLaSsBgqHfKy9T6FggoHm5rqBXCqm6AprJdBi2sTgZCvER3t6CAGYQZDZD";

var YES_PATH = "/us2?orderId=" + ORDER_ID;
var NO_PATH = "/ds1?orderId=" + ORDER_ID;

var CAMPAING_ID = 18;
var US1_PRODUCT_ID = 795;

var loaderDomElement = window.document.getElementById('loader_container');
loaderDomElement.style.display = "none";

document.addEventListener('DOMContentLoaded', async function () {
    const metaPurchaseData = JSON.parse(sessionStorage.getItem("metaPurchaseObjNoor"));
    const GAPurchaseData = JSON.parse(sessionStorage.getItem("GAPurchaseObjNoor"));

    if (metaPurchaseData) {
        try {
            const emailResponse = await sha256(metaPurchaseData.email);
            const phoneResponse = await sha256(metaPurchaseData.phone);
            const nombreResponse = await sha256(metaPurchaseData.nombre);
            const apellidoResponse = await sha256(metaPurchaseData.apellido);
            const ciudadResponse = await sha256(metaPurchaseData.ciudad);
            const estadoResponse = await sha256(metaPurchaseData.estado);
            const codigoPostalResponse = await sha256(metaPurchaseData.codigoPostal);
            const paisResponse = await sha256(metaPurchaseData.pais);
            const generoResponse = await sha256(metaPurchaseData.phone);
            const fechaNacimientoResponse = await sha256("19970216");
            const externalIdResponse = await sha256("welcome-bundle");

            let dataToSend = {
                event_name: "Purchase",
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
                    client_user_agent: metaPurchaseData.client_user_agent,
                    client_ip_address: metaPurchaseData.client_ip_address,
                },
                custom_data: {
                    currency: "usd",
                    value: metaPurchaseData.value,
                    contents: metaPurchaseData.products.map((product) => ({
                        id: product.product_id,
                        quantity: product.quantity,
                    })),
                },
                action_source: "website",
                event_source_url: location.href,
            };

            await fetch(`https://graph.facebook.com/v20.0/${META_PIXEL}/events?access_token=${META_TOKEN}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: [dataToSend] })
            });
        } catch (error) {
            console.error(error);
        }
    }

    if (GAPurchaseData) {
        const items = purchaseEvent.items.map((item) => ({
            item_id: item.item_id,
            item_name: item.item_name,
            quantity: item.quantity,
        }));
        window.gtag("event", GA_PURCHASE_EVENT, {
            transaction_id: ORDER_ID,
            ...(GAPurchaseData)
        });
    }

}, false);

const handleClickYes = () => {
    loaderDomElement.style.display = "flex";
    fetch(API_URL + `/products/importUpsale?orderId=${ORDER_ID}&campaignId=${CAMPAING_ID}&product1_id=${US1_PRODUCT_ID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(response => {
            if (response.result === "ERROR") {
                console.error(response.message);
                alert(`ERROR: ${response.message}`);
            }
            location.href = location.origin + BASE_PATH_STATIC + YES_PATH;
        })
}

const handleClickNo = () => location.href = location.origin + BASE_PATH_STATIC + NO_PATH;

const addClicksListeners = () => {
    const yesButton1 = window.document.getElementById('fkt-link-7fa-69a-a9b');
    const yesButton2 = window.document.getElementById('fkt-link-244-c8d-a56');
    const yesButton3 = window.document.getElementById('fkt-link-b46-fa5-8a3');
    const yesButton4 = window.document.getElementById('fkt-link-879-a9e-97d');

    yesButton1?.addEventListener('click', handleClickYes);
    yesButton2?.addEventListener('click', handleClickYes);
    yesButton3?.addEventListener('click', handleClickYes);
    yesButton4?.addEventListener('click', handleClickYes);

    const noButton1 = window.document.getElementById('fkt-link-8ce-e8d-a4e');
    const noButton2 = window.document.getElementById('fkt-link-df5-78e-9cb');

    noButton1?.addEventListener('click', handleClickNo);
    noButton2?.addEventListener('click', handleClickNo);
}

addClicksListeners();