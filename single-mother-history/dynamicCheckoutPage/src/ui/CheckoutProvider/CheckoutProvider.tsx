import { useState, createContext, useEffect } from "react"
import { CheckoutContextType, CheckoutContextData } from "./CheckoutProvider.protypes"; 
import Loader from "@ui/Loader/Loader";
import CheckoutContent from "@ui/CheckoutContent/CheckoutContent";

import { evaluateFetchPost } from "@logic/utils";
import { getProductByIdService } from "@logic/services"
import { CAMPAING_ID } from "@logic/consts";

const url = new URLSearchParams(window.location.search);

export const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export default function CheckoutProvider() {

    const [context, dispatch] = useState<CheckoutContextData>({
        product: {
            price: "0.00",
            productName: "NO PRODUCTS FOUNDED",
            shippingPrice: "0.00",
            newCustomerDiscount: "71.00",
            productId: 0
        }
    })
    const [busy, setBusy] = useState(true);

    useEffect(() => {
        const productId = url.get('productId');

        evaluateFetchPost(getProductByIdService, {
            productId: Number(productId),
            campaignId: CAMPAING_ID,
        })
        .then((data) => {
            setBusy(false);
            if(data) {
                dispatch({...context, product: {...context.product, productId: Number(productId), ...data.data[0] } })
            }
        })
    }, []);

    return (
        <CheckoutContext.Provider value={{context, dispatch}}>
            {!busy ? <CheckoutContent /> : <Loader text="Cargando productos" />}
        </CheckoutContext.Provider>
    )
}