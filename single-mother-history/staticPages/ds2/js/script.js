var API_URL = "https://noorhairoffers.com/api/konnective";
var BASE_PATH_STATIC = "/dev3";

var ORDER_ID = new URLSearchParams(window.location.search).get('orderId');
if (!ORDER_ID) window.location.href = window.location.origin + BASE_PATH_STATIC;

var YES_PATH = "/us2?orderId=" + ORDER_ID;
var NO_PATH = "/us2?orderId=" + ORDER_ID;

var CAMPAING_ID = 18;
var DS2_PRODUCT_ID = 804;

var yesButtonsIds = ["fkt-link-c2f-097-b4e", "fkt-link-d4d-b81-b85"];
var noButtonsIds = ["fkt-link-b42-fa7-bea"];

var loaderDomElement = window.document.getElementById('loader_container');
loaderDomElement.style.display = "none";

const handleClickYes = () => {
    loaderDomElement.style.display = "flex";
    fetch(API_URL + `/products/importUpsale?orderId=${ORDER_ID}&campaignId=${CAMPAING_ID}&product1_id=${DS2_PRODUCT_ID}`, {
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
    yesButtonsIds.map(id => {
        window.document.getElementById(id).addEventListener('click', handleClickYes);
    });
    noButtonsIds.map(id => {
        window.document.getElementById(id).addEventListener('click', handleClickNo);
    });
}

addClicksListeners();