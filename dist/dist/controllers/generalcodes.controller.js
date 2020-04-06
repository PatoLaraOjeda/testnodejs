"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
function getCode(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const code_id = req.params.id;
        const getCode = yield database_1.default.query('SELECT * FROM cp_general_codes WHERE vigency = "Y" and code_id = ?', [code_id]); // and business_id = ? , business_id
        console.log(code_id);
        return res.json(getCode);
    });
}
exports.getCode = getCode;
function getCodes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const code_id = req.params.business_id;
        const getCodes = yield database_1.default.query('SELECT * FROM cp_general_codes WHERE vigency = "Y"'); // and business_id = ? ', [business_id]
        return res.json(getCodes);
    });
}
exports.getCodes = getCodes;
function createCode(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newCode = req.body;
        const saveCode = yield database_1.default.query('insert into cp_general_codes set ?', [newCode]);
        return res.json(saveCode);
    });
}
exports.createCode = createCode;
function deleteCode(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const code_id = req.params.id;
        const consulta = yield database_1.default.query('select cp_general_son_codes where code_id = ?', [code_id]);
        const jsonConsulta = consulta.values;
        if (!consulta.values) {
            return res.json({
                message: 'UNABLE_TO_DELETE'
            });
        }
        else {
            const deleteCode = yield database_1.default.query('delete cp_general_codes where code_id = ?', [code_id]); // and business_id = ? , business_id
            return res.json(deleteCode);
        }
        ;
    });
}
exports.deleteCode = deleteCode;
function updateCode(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const code_id = req.params.id;
        const updateCode = req.body;
        const updateId = yield database_1.default.query('update cp_general_codes set ? where code_id = ? ', [updateCode, code_id]); // days_vigency > 0  and business_id = ?    updateCustomer, , business_id
        return res.json(updateId);
    });
}
exports.updateCode = updateCode;
