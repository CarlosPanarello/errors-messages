"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiIntegrationError extends Error {
    constructor(numberError, message, description, technicalMessage) {
        super(message);
        this.numberError = numberError;
        this.message = message;
        this.description = description;
        this.technicalMessage = technicalMessage;
        this.name = "ApiIntegrationError";
        this.statusCode = 500;
    }
}
exports.ApiIntegrationError = ApiIntegrationError;
exports.erroIntegracaoModule = (tecnicalMessage) => {
    if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
        tecnicalMessage = "Não foi possivel relizar o getAccount do Kernel";
    }
    return new ApiIntegrationError(5001, "Erro ao recuperar a conta", "Não foi possivel obter os dados da conta, favor tentar novamente daqui a alguns minutos", tecnicalMessage);
};
exports.erroIntegracaoModule2 = new ApiIntegrationError(5204, "O resgate parcial não foi executado corretamente", "Não houve retorno no resgate parcial", "A funcao de resgate parcial retornou um objeto vazio");
//# sourceMappingURL=integration.error.js.map