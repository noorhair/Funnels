import { FetchOutput } from "@appTypes/fetching.types";
import { API_URL } from "@logic/consts";
import { GenericObject } from "@appTypes/types";



// ✨ ✨ ✨ ✨ customized konnectiveFetch ✨ ✨ ✨ ✨
export async function _$queryParamsPOST<TPayloadOutput>( pathWithQueryParams : string ) : Promise<FetchOutput<TPayloadOutput>> {
    try {
        const response = await fetch(`${API_URL}${pathWithQueryParams}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();
        return { data, codeStatus: response.status};
    } catch (error) {
        let message: string = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
}


// ✨ ✨ ✨ ✨ customized konnectiveFetch ✨ ✨ ✨ ✨
export async function _$konnectiveFetch<TPayloadOutput>( pathWithQueryParams : string ) : Promise<FetchOutput<TPayloadOutput>> {
    try {
        const response = await fetch(`${API_URL}${pathWithQueryParams}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();
        return { data, codeStatus: response.status};
    } catch (error) {
        let message: string = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
}

// ✨ ✨ ✨ ✨ Improved get fetching ✨ ✨ ✨ ✨
export async function _$get<TPayloadOutput>(path: string) : Promise<FetchOutput<TPayloadOutput>> {
    try {
        const response = await fetch(`${API_URL}${path}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data  = await response.json();
        return { data, codeStatus: response.status};
    } catch (error) {
        let message: string = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
}
// ✨ ✨ ✨ ✨ Improved post fetching ✨ ✨ ✨ ✨
export async function _$post<TPayloadOutput>(path:string, dataToSend: GenericObject) : Promise<FetchOutput<TPayloadOutput>> {
    try {
        const response = await fetch(`${API_URL}${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...dataToSend})
        });
        const data = await response.json();
        return { data, codeStatus: response.status};
    } catch (error) {
        let message: string = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
}
// ✨ ✨ ✨ ✨ Improved post fetching ✨ ✨ ✨ ✨
export async function _$postMeta<TPayloadOutput>(path:string, dataToSend: GenericObject) : Promise<FetchOutput<TPayloadOutput>> {
    try {
        const response = await fetch(`${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...dataToSend})
        });
        const data = await response.json();
        return { data, codeStatus: response.status};
    } catch (error) {
        let message: string = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
}
// ✨ ✨ ✨ ✨ Improved delete fetching ✨ ✨ ✨ ✨
export async function _$delete<TPayloadOutput, TInput>(path:string, dataToSend: TInput  ) : Promise<FetchOutput<TPayloadOutput>> {
    try {
        const response = await fetch(`${API_URL}${path}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...dataToSend})
        });
        const data = await response.json();
        return { data, codeStatus: response.status};
    } catch (error) {
        let message: string = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
}
// ✨ ✨ ✨ ✨ Improved put fetching ✨ ✨ ✨ ✨
export async function _$put<TPayloadOutput, TInput>(path:string, dataToSend: TInput ) : Promise<FetchOutput<TPayloadOutput>> {
    try {
        const response = await fetch(`${API_URL}${path}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...dataToSend})
        });
        const data = await response.json();
        return { data, codeStatus: response.status};
    } catch (error) {
        let message: string = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
}