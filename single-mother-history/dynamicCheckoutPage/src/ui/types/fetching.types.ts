type DataError = {
    result: "ERROR";
    message: string;
};

type Data3DS = {
    result: "MERC_REDIRECT";
    message: {
        script?: string;
        url?: string;
    };
};

type DataSuccess<TPayloadOutput> = { 
    result: "SUCCESS";
    message: TPayloadOutput,
};
type Data<TPayloadOutput> = DataError | Data3DS | DataSuccess<TPayloadOutput>;

type FetchSuccess<TPayloadOutput> = {
    data: Data<TPayloadOutput>, 
    codeStatus: number, 
}
type FetchError = { error: string }

export type FetchOutput<TPayloadOutput> = FetchSuccess<TPayloadOutput> | FetchError;