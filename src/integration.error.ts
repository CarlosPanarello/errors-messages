import { IApiError1 } from "./api.error";

export class ApiIntegrationError extends Error implements IApiError1 {

  public readonly statusCode: number;
  constructor(public numberError: number, public message: string, public description?: string, public technicalMessage?: string) {
    super(message);
    this.name = "ApiIntegrationError";
    this.statusCode = 500;
  }
}

export const erroIntegracaoModule = (tecnicalMessage?: string) => {
  if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
    tecnicalMessage = "Não foi possivel relizar o getAccount do Kernel";
  }
  return new ApiIntegrationError(5001, "Erro ao recuperar a conta",
    "Não foi possivel obter os dados da conta, favor tentar novamente daqui a alguns minutos",
    tecnicalMessage);
};

export const erroIntegracaoModule2 = new ApiIntegrationError(5204, "O resgate parcial não foi executado corretamente",
  "Não houve retorno no resgate parcial",
  "A funcao de resgate parcial retornou um objeto vazio");
