import { IApiError1 } from "./api.error";

export class ApiValidationError1 extends Error implements IApiError1 {

  public static UNSUPPORTED_TYPE: string = "Please provide a 'String', 'Uint8Array' or 'Array'.";
  public readonly statusCode: number;
  constructor(public numberError: number, public message: string, public description?: string, public technicalMessage?: string) {
    super(message);
    this.name = "ApiValidationError";
    this.statusCode = 400;
  }
}
export const erroValidacao1 = new ApiValidationError1(
  4001,
  "Informe os dados para Credito",
  "Não foram informados os dados necessarios para realizar o credito de juros na conta poupanca",
  "O objeto da requisição está vazio.");

export const erroValidacao2 = new ApiValidationError1(4044, "Campo identificador da poupança inválido",
  "Campo identificador da poupança inválido",
  "Campo identificador da poupança não é do tipo ObjectId do Mongo!");
