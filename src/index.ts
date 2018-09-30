import { ApiValidationError1 } from "./validation.error";

export const erroValidacaoIndex1 = new ApiValidationError1(
  4001,
  "Informe os dados para Credito",
  "Não foram informados os dados necessarios para realizar o credito de juros na conta poupanca",
  "O objeto da requisição está vazio.");
