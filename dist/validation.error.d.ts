import { IApiError1 } from "./api.error";
export declare class ApiValidationError1 extends Error implements IApiError1 {
    numberError: number;
    message: string;
    description?: string | undefined;
    technicalMessage?: string | undefined;
    static UNSUPPORTED_TYPE: string;
    readonly statusCode: number;
    constructor(numberError: number, message: string, description?: string | undefined, technicalMessage?: string | undefined);
}
export declare const erroValidacao1: ApiValidationError1;
export declare const erroValidacao2: ApiValidationError1;
