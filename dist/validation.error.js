"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiValidationError1 extends Error {
    constructor(numberError, message, description, technicalMessage) {
        super(message);
        this.numberError = numberError;
        this.message = message;
        this.description = description;
        this.technicalMessage = technicalMessage;
        this.name = "ApiValidationError";
        this.statusCode = 400;
    }
}
ApiValidationError1.UNSUPPORTED_TYPE = "Please provide a 'String', 'Uint8Array' or 'Array'.";
exports.ApiValidationError1 = ApiValidationError1;
exports.erroValidacao1 = new ApiValidationError1(4001, "Informe os dados para Credito", "Não foram informados os dados necessarios para realizar o credito de juros na conta poupanca", "O objeto da requisição está vazio.");
exports.erroValidacao2 = new ApiValidationError1(4044, "Campo identificador da poupança inválido", "Campo identificador da poupança inválido", "Campo identificador da poupança não é do tipo ObjectId do Mongo!");
//# sourceMappingURL=validation.error.js.map