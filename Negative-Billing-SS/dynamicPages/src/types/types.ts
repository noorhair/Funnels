/*AQUI SE COLOCAN LOS TIPOS DE TYPESCRIPT*/
export type GenericObject<TValue = string> =  { [key: string] : TValue };

export type PurchaseEvent = {
    transaction_id: string,
    value: number,
    currency: string,
    items: Items[]
  }
  
  export type Items = {
    item_id: string,
    item_name: string,
    quantity: number
  }
  
  export type EventData = {
    value: number,
    client_user_agent: string,
    client_ip_address: string,
    currency: string,
    products: Products[]
  }
  
  export type Products = {
    product_id: string,
    quantity: number
  }