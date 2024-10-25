/*AQUI SE COLOCAN LOS TIPOS DE TYPESCRIPT*/
export type GenericObject<TValue = string> =  { [key: string] : TValue };

export type Items = {
    item_id: string,
    item_name: string,
    quantity: number
}
  
export type PurchaseEvent = {
    transaction_id: string,
    value: number,
    currency: string,
    items: Items[]
}
  
export type EventData = {
    email: string;
    phone: string;
    nombre: string;
    apellido: string; 
    ciudad: string;
    estado: string;
    codigoPostal: string;
    pais: string;
    genero: string;
    value: number,
    currency: string,
    client_user_agent: string,
    client_ip_address: string,
    products: Products[]
}

export type Products = {
    product_id: string,
    quantity: number
}

export type BeginCheckoutEvent = {
    value: number,
    items: Items[]
}

export type AddToCartEvent = {
    value: number,
    items: Items[]
}