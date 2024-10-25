import { useState, createContext, useEffect } from "react";
import { CheckoutContextType, CheckoutContextData } from "./CheckoutProvider.protypes";
import Loader from "@ui/Loader/Loader";
import CheckoutContent from "@ui/CheckoutContent/CheckoutContent";

import { evaluateFetchPost } from "@logic/utils";
import { getProductByIdService } from "@logic/services";
import { CAMPAING_ID, PRODUCT_ID } from "@logic/consts";

export const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export default function CheckoutProvider() {
	const [context, dispatch] = useState<CheckoutContextData>({
		product: {
			price: "0.00",
			productName: "Product name",
			shippingPrice: "0.00",
			newCustomerDiscount: "67.00",
		},
	});
	const [busy, setBusy] = useState(true);

	useEffect(() => {
		evaluateFetchPost(getProductByIdService, {
			productId: PRODUCT_ID,
			campaignId: CAMPAING_ID,
		}).then((data) => {
			if (data) {
				dispatch({ ...context, product: { ...context.product, ...data.data[0] } });
				setBusy(false);
			}
		});
	}, []);

	return (
		<CheckoutContext.Provider value={{ context, dispatch }}>
			{!busy ? <CheckoutContent /> : <Loader text="Loading items" />}
		</CheckoutContext.Provider>
	);
}
