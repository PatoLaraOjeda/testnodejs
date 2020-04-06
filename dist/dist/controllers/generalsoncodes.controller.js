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
function getSonCode(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const code_id = req.params.id;
        const getSonCode = yield database_1.default.query('SELECT * FROM cp_general_son_codes WHERE vigency = "Y" and son_code_id = ?', [code_id]); // and business_id = ? , business_id
        console.log(code_id);
        return res.json(getSonCode);
    });
}
exports.getSonCode = getSonCode;
function getSonCodes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const code_id = req.params.id;
        const getSonCodes = yield database_1.default.query('SELECT * FROM cp_general_son_codes WHERE vigency = "Y" and code_id = ?', [code_id]); // and business_id = ? ', [business_id]
        return res.json(getSonCodes);
    });
}
exports.getSonCodes = getSonCodes;
function createSonCode(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newCode = req.body;
        const saveSonCode = yield database_1.default.query('insert into cp_general_son_codes set ?', [newCode]);
        return res.json(saveSonCode);
    });
}
exports.createSonCode = createSonCode;
function deleteSonCode(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const code_id = req.params.id;
        const deleteSonCode = yield database_1.default.query('delete cp_general_son_codes where son_code_id = ?', [code_id]); // and business_id = ? , business_id
        return res.json(deleteSonCode);
    });
}
exports.deleteSonCode = deleteSonCode;
function updateSonCode(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const code_id = req.params.id;
        const updateSonCode = req.body;
        const updateSonId = yield database_1.default.query('update cp_general_son_codes set ? where son_code_id = ? ', [updateSonCode, code_id]); // days_vigency > 0  and business_id = ?    updateCustomer, , business_id
        return res.json(updateSonId);
    });
}
exports.updateSonCode = updateSonCode;
