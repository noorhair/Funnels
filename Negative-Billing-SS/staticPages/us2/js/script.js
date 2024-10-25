var ORDER_ID = new URLSearchParams(window.location.search).get("orderId");
var API_URL = "https://noorhairoffers.com/api/konnective";
var BASE_PATH_DINAMIC = "/super-serum-trial";
var BASE_PATH_STATIC = "/super-serum-trial";

//////KONNECTIVE
var CAMPAING_ID = "24";
var US2_PRODUCT_ID = 1135;

var loaderDomElement = window.document.getElementById("loader_container");
loaderDomElement.style.display = "none";

const evaluateQueryParams = () => {
	if (!ORDER_ID) window.location.href = window.location.origin + BASE_PATH_DINAMIC;
};

const handleClickYes = () => {
	loaderDomElement.style.display = "flex";
	const redirectURL = location.origin + BASE_PATH_STATIC + "/us3?orderId=" + ORDER_ID;
	fetch(
		API_URL +
		`/products/importUpsale?orderId=${ORDER_ID}&campaignId=${CAMPAING_ID}&productId=${US2_PRODUCT_ID}&redirectsTo=${redirectURL}&errorRedirectsTo=${location.origin + BASE_PATH_DINAMIC
		}`,
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
			location.href = location.origin + BASE_PATH_STATIC + "/us3?orderId=" + ORDER_ID;
		});
};

const handleClickNo = () => {
	location.href = location.origin + BASE_PATH_STATIC + "/us3?orderId=" + ORDER_ID;
};

const clicksListeners = () => {
	const yesButton1 = window.document.getElementById("i8a8tk");
	const yesButton2 = window.document.getElementById("i2odkw");

	yesButton1.addEventListener("click", handleClickYes);
	yesButton2.addEventListener("click", handleClickYes);

	const noButton1 = window.document.getElementById("iuae88");
	const noButton2 = window.document.getElementById("fkt-link-350-89a-9f7");
	const noButton3 = window.document.getElementById("irl8kh");

	noButton1.addEventListener("click", handleClickNo);
	noButton2.addEventListener("click", handleClickNo);
	noButton3.addEventListener("click", handleClickNo);
};

evaluateQueryParams();
clicksListeners();
