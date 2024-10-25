import { _$konnectiveFetch, _$post, _$postMeta, _$queryParamsPOST } from "@logic/fetching";
import * as ST from "@appTypes/services.types";
import { convertJSONToQueryParamsString } from "@logic/utils";
import { META_PIXEL, META_TOKEN } from "./consts";

export async function getProductByIdService(dataToSend: ST.GetProductByIdIN ){
    const pathWithQueryParams = `/products/getProductById${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$konnectiveFetch<ST.GetProductByIdOUT>(pathWithQueryParams);
    return response;
}

export async function sendOrderService(dataToSend: ST.SendOrderIN ){
    const pathWithQueryParams = `/orders/import${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$konnectiveFetch<ST.SendOrderOUT>(pathWithQueryParams);
    return response;
}

export async function confirmPaypalService(dataToSend: ST.ConfirmPaypalIN ){
    const pathWithQueryParams = `/orders/confirmPaypal${convertJSONToQueryParamsString<string | null | undefined>(dataToSend)}`;
    const response = await _$konnectiveFetch<ST.ConfirmPaypalOUT>(pathWithQueryParams);
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
    //@ts-ignore
    // const response = await _$post<ST.SendMetaPurchaseOUT>("/tools/sendMetaEvent", data);
    const response = await _$postMeta<ST.SendMetaPurchaseOUT>(`https://graph.facebook.com/v20.0/${META_PIXEL}/events?access_token=${META_TOKEN}`, data);

    return response;
}