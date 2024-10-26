export type GetProductByIdIN = {
    productId: number,
    campaignId: number,
}
export type GetProductByIdOUT = {
    data: Array<{
        price: string;
        productName: string;
        shippingPrice: string;
    }>
}

export type SendOrderIN = {
    product1_qty: string;
    campaignId: string;
    product1_id: string;
    billShipSame: boolean;
    emailAddress: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    address1: string;
    postalCode: string;
    paymentSource?: string;
    city: string;
    state: string //states
    country: string //countries
    shipFirstName: string; 
    shipLastName: string;
    shipAddress1: string;
    shipPostalCode: string;
    shipCity: string; 
    shipState: string //states
    shipCountry: string //countries
    paySource: string; //payments types
    cardNumber?: string;
    cardMonth?: string;
    cardYear?: string;
    cardSecurityCode?: string;
    paypalBillerId?: string,
    salesUrl?: string,
}

export type SendClickIN = {
    campaignId: string;
    pageType: string;
    requestUri: string;
    userAgent: string;
}

export type SendClickOUT = {
    sessionId: string;
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

export type SendLeadIN = {
    campaignId: string;
    firstName: string;
    lastName: string;
    sessionId: string | null;
    phoneNumber: string;
    emailAddress: string;
    product1_id: string;
    product1_qty: string;
    address1: string;
    address2: string;
    postalCode: string;
    city: string;
    state: string;
    country: string;
    shipFirstName: string;
    shipLastName: string;
    shipAddress1: string;
    shipAddress2: string;
    shipPostalCode: string;
    shipCity: string;
    shipState: string;
    shipCountry: string;
}

export type SendLeadOUT = {
    
}

export type SendPaypalIN = {
    campaignId: string;
    orderId: string;
    payerId: string;
    paypalBillerId: string;
    sessionId: string;
    token: string;
    product1_id: string;
}

export type SendPaypalOUT = {

}

export type AddUpsaleIN = {
    orderId: string,
    product1_id: string;
    campaignId: string;
}
export type AddUpsaleOUT = {
    orderId: string,
}


export type ConfirmPaypalIN= {
    token?: string | null
    payerId?: string | null;
    baToken?: string | null;
    campaignId: string;
    product1_id: string; 
    paypalSdk?: number;
    paypalBillerId: string;
    sessionId: string | null;
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
      em: string,
      ph: string,
      fbp: string,
      fbc: string,
      fn: string,
      ln: string,
      ct: string,
      st: string,
      zp: string,
      country: string,
      ge: string,
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