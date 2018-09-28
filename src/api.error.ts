export interface IApiError1 {
  numberError: number;
  message: string;
  description?: string;
  technicalMessage?: string;
  readonly statusCode: number;
}
export class ApiNotFoundError1 extends Error implements IApiError1 {

  public static UNSUPPORTED_TYPE: string = "Please provide a 'String', 'Uint8Array' or 'Array'.";
  public statusCode: number;
  constructor(public numberError: number, public message: string, public description?: string, public technicalMessage?: string) {
    super(message);
    this.name = "ApiNotFoundError";
    this.statusCode = 404;
  }
}
// Erro generico para quando nao encontrar nenhum registro
export const nenhumRegistroEncontrado = new ApiNotFoundError1(4000, "Não foi encontrado nehum registro",
  "Não foi encontrado nehum registro",
  "Não foi encontrado nehum registro");
