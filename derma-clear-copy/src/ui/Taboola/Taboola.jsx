import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Taboola() {
	const location = useLocation();

	useEffect(() => {
		if (window._tfa) {
			window._tfa.push({ notify: "event", name: "page_view", id: 1698075 });

			function sendTaboolaPurchase() {
				const orderData = JSON.parse(sessionStorage.getItem("orderData"));

				if (orderData.items) {
					let conVal = 0;
					for (let i = 0; i < orderData.items.length; i++) {
						let product = orderData.items[i];
						conVal += Number(product.price) + Number(product.shipping);
					}
					debugger;

					_tfa.push({
						notify: "event",
						name: "make_purchase",
						id: 1698075,
						revenue: conVal,
						orderid: new Date().getTime() + "",
						quantity: "1",
						currency: "USD",
					});
				}
			}

			if (window.location.pathname.includes("/thank-you")) {
				sendTaboolaPurchase();
				window.removeEventListener("beforeunload", sendTaboolaPurchase, true);
			}

			if (window.location.pathname.includes("/us1")) {
				window.addEventListener("beforeunload", sendTaboolaPurchase, true);
			}
		}
	}, [location.pathname]);

	return <div id="taboolaNoor"></div>;
}
