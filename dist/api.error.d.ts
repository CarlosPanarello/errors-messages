export interface IApiError1 {
    numberError: number;
    message: string;
    description?: string;
    technicalMessage?: string;
    readonly statusCode: number;
}
export declare class ApiNotFoundError1 extends Error implements IApiError1 {
    numberError: number;
    message: string;
    description?: string | undefined;
    technicalMessage?: string | undefined;
    static UNSUPPORTED_TYPE: string;
    statusCode: number;
    constructor(numberError: number, message: string, description?: string | undefined, technicalMessage?: string | undefined);
}
export declare const nenhumRegistroEncontrado: ApiNotFoundError1;
