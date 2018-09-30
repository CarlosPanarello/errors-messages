import { IApiError1 } from "./api.error";
export declare class ApiIntegrationError extends Error implements IApiError1 {
    numberError: number;
    message: string;
    description?: string | undefined;
    technicalMessage?: string | undefined;
    readonly statusCode: number;
    constructor(numberError: number, message: string, description?: string | undefined, technicalMessage?: string | undefined);
}
export declare const erroIntegracaoModule: (tecnicalMessage?: string | undefined) => ApiIntegrationError;
export declare const erroIntegracaoModule2: ApiIntegrationError;
