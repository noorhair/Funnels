import { API_URL } from "@logic/consts";

export async function _$queryParamsPOST(pathWithQueryParams) {
    try {
        const response = await fetch(`${API_URL}${pathWithQueryParams}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();
        return { data, codeStatus: response.status };
    } catch (error) {
        let message = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
};


export async function _$konnectiveFetch(pathWithQueryParams) {
    try {
        const response = await fetch(`${API_URL}${pathWithQueryParams}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();
        return { data, codeStatus: response.status };
    } catch (error) {
        let message = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
};

export async function _$get(path) {
    try {
        const response = await fetch(`${API_URL}${path}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        return { data, codeStatus: response.status };
    } catch (error) {
        let message = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
};

export async function _$post(path, dataToSend) {
    try {
        const response = await fetch(`${API_URL}${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...dataToSend })
        });
        const data = await response.json();
        return { data, codeStatus: response.status };
    } catch (error) {
        let message = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
};

export async function _$postMeta(path, dataToSend) {
    try {
        const response = await fetch(`${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...dataToSend })
        });
        const data = await response.json();
        return { data, codeStatus: response.status };
    } catch (error) {
        let message = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
};
