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
function getProcess(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const process_id = req.params.id;
        const getProcess = yield database_1.default.query('SELECT * FROM cp_process WHERE tool_id = ? and process_vigency = "Y"', [process_id]); // and business_id = ? , business_id
        return res.json(getProcess);
    });
}
exports.getProcess = getProcess;
function getProcesses(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const business_id = req.params.business_id;
        const getProcesses = yield database_1.default.query('SELECT * FROM cp_process where process_vigency = "Y"'); // and business_id = ? ', [business_id]
        return res.json(getProcesses);
    });
}
exports.getProcesses = getProcesses;
function createProcess(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newProcess = req.body;
        const saveProcess = yield database_1.default.query('insert into cp_process set ?', [newProcess]);
        return res.json(saveProcess);
    });
}
exports.createProcess = createProcess;
function deleteProcess(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const process_id = req.params.id;
        const deleteProcess = yield database_1.default.query('update cp_process set process_vigency = "N" where customer_id = ?', [process_id]); // and business_id = ? , business_id
        return res.json(deleteProcess);
    });
}
exports.deleteProcess = deleteProcess;
function updateProcess(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const process_id = req.params.id;
        const updateProcess = req.body;
        const updateId = yield database_1.default.query('update cp_process set ? where tool_id = ? ', [updateProcess, process_id]); // days_vigency > 0  and business_id = ?    updateCustomer, , business_id
        return res.json(updateId);
    });
}
exports.updateProcess = updateProcess;
