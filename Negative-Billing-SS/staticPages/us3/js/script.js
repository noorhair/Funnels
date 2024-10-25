var ORDER_ID = new URLSearchParams(window.location.search).get("orderId");
var API_URL = "https://noorhairoffers.com/api/konnective";
var BASE_PATH_DINAMIC = "/super-serum-trial";

//////KONNECTIVE
var CAMPAING_ID = "24";
var US3_PRODUCT_ID = 1139;

var loaderDomElement = window.document.getElementById("loader_container");
loaderDomElement.style.display = "none";

const evaluateQueryParams = () => {
	if (!ORDER_ID) window.location.href = window.location.origin + BASE_PATH_DINAMIC;
};

const handleClickYes = () => {
	loaderDomElement.style.display = "flex";
	fetch(API_URL + `/products/importUpsale?orderId=${ORDER_ID}&campaignId=${CAMPAING_ID}&productId=${US3_PRODUCT_ID}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	})
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
			location.href = location.origin + BASE_PATH_DINAMIC + "/thank-you";
		});
};

const handleClickNo = () => {
	location.href = location.origin + BASE_PATH_DINAMIC + "/thank-you";
};

const clicksListeners = () => {
	const yesButton1 = window.document.getElementById("fkt-link-44e-292-b8d");
	const yesButton2 = window.document.getElementById("fkt-link-ce0-f86-81d");
	const yesButton3 = window.document.getElementById("fkt-link-939-088-84d");
	const yesButton4 = window.document.getElementById("fkt-link-ae9-697-a89");

	yesButton1.addEventListener("click", handleClickYes);
	yesButton2.addEventListener("click", handleClickYes);
	yesButton3.addEventListener("click", handleClickYes);
	yesButton4.addEventListener("click", handleClickYes);

	const noButton1 = window.document.getElementById("fkt-link-607-1a8-a94");
	const noButton2 = window.document.getElementById("fkt-link-30a-29d-965");

	noButton1.addEventListener("click", handleClickNo);
	noButton2.addEventListener("click", handleClickNo);
};

evaluateQueryParams();
clicksListeners();
