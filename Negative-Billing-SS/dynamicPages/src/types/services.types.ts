export type GetProductByIdIN= {
    productId: number,
    campaignId: number,
}
export type GetProductByIdOUT = {
    data: Array<{[key: string] : any}>
}

export type SendOrderIN= {
    //product data
    product1_qty: string;
    campaignId: string;
    product1_id: string;

    //aditional user data
    emailAddress: string;
    phoneNumber: string;

    //user data
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    postalCode: string;
    city: string;
    state: string //states
    country: string //countries
    
    //shipment data
    shipFirstName: string; 
    shipLastName: string;
    shipAddress1: string;
    shipAddress2: string;
    shipPostalCode: string;
    shipCity: string; 
    shipState: string //states
    shipCountry: string //countries

    //billing data

    //payment data
    paySource: string; //payments types
    cardNumber?: string;
    cardMonth?: string;
    cardYear?: string;
    cardSecurityCode?: string;

    paypalBillerId?: string,
    salesUrl?: string,

    

}
export type SendOrderOUT = {
    paypalUrl: string;
    orderId: string,
    totalAmount: number,
    currencyCode: string,
    items: Array<{
        productId: string,
        name: string,
        qty: number
    }>
}



export type AddUpsaleIN = {
    orderId: string;
    productId: string;
    campaignId: string;
}
export type AddUpsaleOUT = {
    orderId: string,
    message?: any;
}


export type ConfirmPaypalIN= {
    token?: string | null
    payerId?: string | null;
    baToken?: string | null;
    campaignId: string;
    product1_id: string; 
    paypalBillerId: string;
    sessionId: string;
}
export type ConfirmPaypalOUT = {
    paypalUrl: string;
    orderId: string,
    totalAmount: number,
    currencyCode: string,
    items: Array<{
        productId: string,
        name: string,
        qty: number
    }>
}



export type AddContactToListIN = {
    firstName: string;
    email: string;
    sendlaneListId: string;
    lastName?: string;
    phone?: string;
}
export type AddContactToListOUT = {
    message: string;
}



export type ValidateAddressIN = {
    street: string;
    city: string;
    state: string;
    zipcode: string;
}
export type ValidateAddressOUT = {
    dpv_match_code: string;
    dpv_footnotes: string; 
    dpv_cmra: string; 
    dpv_vacant: string; 
    dpv_no_stat: string; 
    active: string;
    footnotes: string;
    enhanced_match: string; 
}

export type SendMetaPurchaseOUT = {
    events_received: number,
    messages: Array<string>,
    fbtrace_id: string
}

export type SendMetaPurchaseIN = {
    event_name: string,
    event_time: number,
    user_data: {
      fbp: string,
      fbc: string,
      db: string,
      external_id: string,
      fb_login_id: string,
      client_user_agent: string,
        client_ip_address: string,
    },
    custom_data: {
      currency: "usd",
      value: number,
      contents:Array<{
        id: string,
        quantity: number,
      }>
    },
    action_source: string,
    
    event_source_url: string
}