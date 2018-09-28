import errors = require("restify-errors");
import { IApiError1 } from "./api.error";

// TODO criar uma interface para os erro e entao usar implementacaoes diferentes para diferentes linguas
export class ApiInternalError1 extends errors.InternalError implements IApiError1 {
  public readonly statusCode: number;
  constructor(public numberError: number, public message: string, public description: string, public technicalMessage: string) {
    super(message);
    this.name = "ApiInternalError";
    this.statusCode = 500;
  }
}
export const erroInterno1 = new ApiInternalError1(9012, "Conta informada não é da organização informada",
  "A conta informada não pertence a organização informada. Verifique os dados.",
  "Conta informada não encontrada na base da organização informada");

export const erroInterno2 = (tecnicalMessage?: string) => {
  if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
    tecnicalMessage = "Não foi possivel relizar a consulta da poupança no banco";
  }
  return new ApiInternalError1(9014, "Erro ao consultar a poupança",
    "Erro ao consultar a poupança, favor tentar novamente daqui a alguns minutos",
    tecnicalMessage);
};
