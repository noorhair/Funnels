import { _$konnectiveFetch, _$post, _$queryParamsPOST, _$postMeta } from "@logic/fetching";
import { convertJSONToQueryParamsString } from "@logic/utils";

export async function getProductByIdService(dataToSend) {
    const pathWithQueryParams = `/products/getProductById${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$konnectiveFetch(pathWithQueryParams);
    return response;
}

export async function sendOrderService(dataToSend) {
    const pathWithQueryParams = `/orders/import${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$konnectiveFetch(pathWithQueryParams);
    return response;
}


export async function sendLeadService(dataToSend) {
    const pathWithQueryParams = `/orders/lead${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$konnectiveFetch(pathWithQueryParams);
    return response;
}

export async function sendClickService(dataToSend) {
    const pathWithQueryParams = `/orders/click${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$konnectiveFetch(pathWithQueryParams);
    return response;
}

export async function addUpsaleService(dataToSend) {
    const pathWithQueryParams = `/products/importUpsale${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$konnectiveFetch(pathWithQueryParams);
    return response;
}

export async function addContactToListService(dataToSend) {
    const response = await _$post("/sendlane/addContactToList", dataToSend);
    return response;
}

export async function validateAddressService(dataToSend) {
    const pathWithQueryParams = `/smarty/validateAddress${convertJSONToQueryParamsString(dataToSend)}`;
    const response = await _$queryParamsPOST(pathWithQueryParams);
    return response;
}

