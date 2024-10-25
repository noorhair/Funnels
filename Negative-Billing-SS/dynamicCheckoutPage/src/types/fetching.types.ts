type Data3DSError = {
    result: "MERC_REDIRECT";
    message: {
        script?: string;
        url?: string;
    };
};
type DataError = {
    result: "ERROR";
    message: string;
};
type DataSuccess<TPayloadOutput> = { 
    result: "SUCCESS";
    message: TPayloadOutput,
};
type Data<TPayloadOutput> = DataError | Data3DSError | DataSuccess<TPayloadOutput>;

type FetchSuccess<TPayloadOutput> = {
    data: Data<TPayloadOutput>, 
    codeStatus: number, 
}
type FetchError = { error: string }

export type FetchOutput<TPayloadOutput> = FetchSuccess<TPayloadOutput> | FetchError;