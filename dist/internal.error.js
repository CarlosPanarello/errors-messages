"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors = require("restify-errors");
class ApiInternalError1 extends errors.InternalError {
    constructor(numberError, message, description, technicalMessage) {
        super(message);
        this.numberError = numberError;
        this.message = message;
        this.description = description;
        this.technicalMessage = technicalMessage;
        this.name = "ApiInternalError";
        this.statusCode = 500;
    }
}
exports.ApiInternalError1 = ApiInternalError1;
exports.erroInterno1 = new ApiInternalError1(9012, "Conta informada não é da organização informada", "A conta informada não pertence a organização informada. Verifique os dados.", "Conta informada não encontrada na base da organização informada");
exports.erroInterno2 = (tecnicalMessage) => {
    if (tecnicalMessage === undefined || tecnicalMessage.trim().length === 0) {
        tecnicalMessage = "Não foi possivel relizar a consulta da poupança no banco";
    }
    return new ApiInternalError1(9014, "Erro ao consultar a poupança", "Erro ao consultar a poupança, favor tentar novamente daqui a alguns minutos", tecnicalMessage);
};
//# sourceMappingURL=internal.error.js.map