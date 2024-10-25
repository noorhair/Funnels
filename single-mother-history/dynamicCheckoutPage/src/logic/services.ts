import { _$konnectiveFetch, _$post, _$queryParamsPOST, _$postMeta } from "@logic/fetching";
import * as ST from "@ui/types/services.types";
import { convertJSONToQueryParamsString } from "@logic/utils";
import { META_PIXEL, META_TOKEN } from "./consts";

export async function getProductByIdService(dataToSend: ST.GetProductByIdIN ){
    const pathWithQueryParams = `/products/getProductById${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$konnectiveFetch<ST.GetProductByIdOUT>(pathWithQueryParams);
    return response;
}

export async function sendOrderService(dataToSend: ST.SendOrderIN | any ){
    const pathWithQueryParams = `/orders/import${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$konnectiveFetch<ST.SendOrderOUT | any>(pathWithQueryParams);
    return response;
}

export async function sendConfirmPaypalService(dataToSend: ST.SendPaypalIN ){
    const pathWithQueryParams = `/orders/paypal${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$konnectiveFetch<ST.SendPaypalOUT>(pathWithQueryParams);
    return response;
}

export async function sendLeadService(dataToSend: ST.SendLeadIN ){
    const pathWithQueryParams = `/orders/lead${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$konnectiveFetch<ST.SendLeadOUT | any>(pathWithQueryParams);
    return response;
}

export async function sendClickService(dataToSend: ST.SendClickIN ){
    const pathWithQueryParams = `/orders/click${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$konnectiveFetch<ST.SendClickOUT>(pathWithQueryParams);
    return response;
}

export async function confirmPaypalService(dataToSend: ST.ConfirmPaypalIN ){
    const pathWithQueryParams = `/orders/confirmPaypal${convertJSONToQueryParamsString<any | null | undefined>(dataToSend)}`;
    const response = await _$konnectiveFetch<ST.ConfirmPaypalOUT | any>(pathWithQueryParams);
    return response;
}

export async function addUpsaleService(dataToSend: ST.AddUpsaleIN ){
    const pathWithQueryParams = `/products/importUpsale${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$konnectiveFetch<ST.AddUpsaleOUT>(pathWithQueryParams);
    return response;
}

export async function addContactToListService(dataToSend: ST.AddContactToListIN ){
    const response = await _$post<ST.AddContactToListOUT>("/sendlane/addContactToList", dataToSend);
    return response;
}

export async function validateAddressService(dataToSend: ST.ValidateAddressIN ){
    const pathWithQueryParams = `/smarty/validateAddress${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$queryParamsPOST<ST.ValidateAddressOUT>(pathWithQueryParams);
    return response;
}

export async function sendMetaService(dataToSend: ST.SendMetaPurchaseIN ){
    const data = {data: [dataToSend]};
    // @ts-ignore
    const response = await _$postMeta<ST.SendMetaPurchaseOUT>(`https://graph.facebook.com/v20.0/${META_PIXEL}/events?access_token=${META_TOKEN}`, data);

    return response;
}