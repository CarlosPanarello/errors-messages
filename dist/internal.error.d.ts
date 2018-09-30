import errors = require("restify-errors");
import { IApiError1 } from "./api.error";
export declare class ApiInternalError1 extends errors.InternalError implements IApiError1 {
    numberError: number;
    message: string;
    description: string;
    technicalMessage: string;
    readonly statusCode: number;
    constructor(numberError: number, message: string, description: string, technicalMessage: string);
}
export declare const erroInterno1: ApiInternalError1;
export declare const erroInterno2: (tecnicalMessage?: string | undefined) => ApiInternalError1;
