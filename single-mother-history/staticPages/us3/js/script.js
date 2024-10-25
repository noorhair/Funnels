var API_URL = "https://noorhairoffers.com/api/konnective";
var BASE_PATH_STATIC = "/dev3";

var ORDER_ID = new URLSearchParams(window.location.search).get("orderId");
if (!ORDER_ID) window.location.href = window.location.origin + BASE_PATH_STATIC;

var YES_PATH = "/thank-you";
var NO_PATH = "/thank-you";

var CAMPAING_ID = 18;
var US3_PRODUCT_ID = 809;

var yesButtonsIds = ["fkt-link-4ab-faf-b95-2", "fkt-link-3c4-4b5-a13", "fkt-link-d40-8bb-bd2", "fkt-link-609-db1-b81"];
var noButtonsIds = ["i9yldj", "i0t4wg"];

var loaderDomElement = window.document.getElementById("loader_container");
loaderDomElement.style.display = "none";

const handleClickYes = () => {
	loaderDomElement.style.display = "flex";
	fetch(
		API_URL + `/products/importUpsale?orderId=${ORDER_ID}&campaignId=${CAMPAING_ID}&product1_id=${US3_PRODUCT_ID}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		}
	)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((response) => {
			if (response.result === "ERROR") {
				console.error(response.message);
				alert(`ERROR: ${response.message}`);
			}
			location.href = location.origin + BASE_PATH_STATIC + YES_PATH;
		});
};

const handleClickNo = () => (location.href = location.origin + BASE_PATH_STATIC + NO_PATH);

const addClicksListeners = () => {
	yesButtonsIds.map((id) => {
		window.document.getElementById(id).addEventListener("click", handleClickYes);
	});
	noButtonsIds.map((id) => {
		window.document.getElementById(id).addEventListener("click", handleClickNo);
	});
};

addClicksListeners();
