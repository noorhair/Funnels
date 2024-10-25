var BASE_PATH_DYNAMIC_CHEKOUT = "/dev3/checkout";

//////KONNECTIVE
var CAMPAING_ID = 18;

var CHECKOUT1_PRODUCT_ID = 801;
var CHECKOUT2_PRODUCT_ID = 794;
var CHECKOUT3_PRODUCT_ID = 1141;

var product1Button = window.document.getElementById("izapap");
var product2Button = window.document.getElementById("i64r3i");
var product3Button = window.document.getElementById("i1neoc");

product1Button.addEventListener("click", () => {
	location.href = location.origin + BASE_PATH_DYNAMIC_CHEKOUT + "?productId=" + CHECKOUT1_PRODUCT_ID;
});
product2Button.addEventListener("click", () => {
	location.href = location.origin + BASE_PATH_DYNAMIC_CHEKOUT + "?productId=" + CHECKOUT2_PRODUCT_ID;
});
product3Button.addEventListener("click", () => {
	location.href = location.origin + BASE_PATH_DYNAMIC_CHEKOUT + "?productId=" + CHECKOUT3_PRODUCT_ID;
});
