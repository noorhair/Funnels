export type checkoutForm = {
    email: string; 
    firstName: string;
    lastName: string;
    phone: string;
    deliveryAddress: string;
    deliveryAddress2: string;
    zipCode: string;
    city: string;
    state: string;
    country: string;
    billingAddress?: string;
    billingAddress2?: string;
    billingCity?: string;
    billingZipCode?: string;
    billingState?: string;
}

export type paypalData = {
    paymentSource: string
};