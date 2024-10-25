export type CheckoutContextType = {
    context: CheckoutContextData;
    dispatch: React.Dispatch<CheckoutContextData>;
}


export type CheckoutContextData = {
    product: {
        price: string;
        productName: string;
        shippingPrice: string;
        newCustomerDiscount: string;
    }
}