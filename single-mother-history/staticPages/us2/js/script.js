var API_URL = "https://noorhairoffers.com/api/konnective";
var BASE_PATH_STATIC = "/dev3";

var ORDER_ID = new URLSearchParams(window.location.search).get("orderId");
if (!ORDER_ID) window.location.href = window.location.origin + BASE_PATH_STATIC;

var YES_PATH = "/us3?orderId=" + ORDER_ID;
var NO_PATH = "/ds3?orderId=" + ORDER_ID;

var CAMPAING_ID = 18;
var US2_PRODUCT_ID = 807;

var yesButtonsIds = ["fkt-link-dfa-ab1-aff", "fkt-link-091-882-84a", "fkt-link-31c-ba0-9d2", "fkt-link-a7c-98f-a2f"];
var noButtonsIds = ["fkt-link-0fd-5bd-a0e", "no_button_2"];

var loaderDomElement = window.document.getElementById("loader_container");
loaderDomElement.style.display = "none";

const handleClickYes = () => {
	loaderDomElement.style.display = "flex";
	fetch(
		API_URL + `/products/importUpsale?orderId=${ORDER_ID}&campaignId=${CAMPAING_ID}&product1_id=${US2_PRODUCT_ID}`,
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
