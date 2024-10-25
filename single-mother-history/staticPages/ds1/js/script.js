var API_URL = "https://noorhairoffers.com/api/konnective";
var BASE_PATH_STATIC = "/dev3";

var ORDER_ID = new URLSearchParams(window.location.search).get('orderId');
if (!ORDER_ID) window.location.href = window.location.origin + BASE_PATH_STATIC;
var YES_PATH = "/us2?orderId=" + ORDER_ID;
var NO_PATH = "/ds2?orderId=" + ORDER_ID;
var CAMPAING_ID = 18;
var DS1_PRODUCT_ID = 803;
var yesButtonsIds = ["fkt-link-b6d-184-b03", "fkt-link-217-aa7-84b", "fkt-link-a52-bba-acb", "fkt-link-951-182-a96"];
var noButtonsIds = ["fkt-link-7a5-889-bd2", "fkt-link-109-dbf-912"];

var loaderDomElement = window.document.getElementById('loader_container');
loaderDomElement.style.display = "none";

const handleClickYes = () => {
    loaderDomElement.style.display = "flex";
    fetch(API_URL + `/products/importUpsale?orderId=${ORDER_ID}&campaignId=${CAMPAING_ID}&product1_id=${DS1_PRODUCT_ID}`, {
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