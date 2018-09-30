"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiNotFoundError1 extends Error {
    constructor(numberError, message, description, technicalMessage) {
        super(message);
        this.numberError = numberError;
        this.message = message;
        this.description = description;
        this.technicalMessage = technicalMessage;
        this.name = "ApiNotFoundError";
        this.statusCode = 404;
    }
}
ApiNotFoundError1.UNSUPPORTED_TYPE = "Please provide a 'String', 'Uint8Array' or 'Array'.";
exports.ApiNotFoundError1 = ApiNotFoundError1;
exports.nenhumRegistroEncontrado = new ApiNotFoundError1(4000, "Não foi encontrado nehum registro", "Não foi encontrado nehum registro", "Não foi encontrado nehum registro");
//# sourceMappingURL=api.error.js.map