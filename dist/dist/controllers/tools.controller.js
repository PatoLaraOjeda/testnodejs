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
function getTool(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tool_id = req.params.id;
        const getTool = yield database_1.default.query('SELECT * FROM cp_tools WHERE tool_id = ?', [tool_id]); // and business_id = ? , business_id
        return res.json(getTool);
    });
}
exports.getTool = getTool;
function getTools(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const business_id = req.params.business_id;
        console.log(business_id);
        const getTools = yield database_1.default.query('SELECT * FROM cp_tools'); // and business_id = ? ', [business_id]
        return res.json(getTools);
    });
}
exports.getTools = getTools;
function createTool(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newTool = req.body;
        const saveTool = yield database_1.default.query('insert into cp_tools set ?', [newTool]);
        return res.json(saveTool);
    });
}
exports.createTool = createTool;
function deleteTool(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tool_id = req.params.id;
        console.log(req.params.customer_id);
        const deleteTool = yield database_1.default.query('delete from cp_tools where tool_id = ?', [tool_id]); // and business_id = ? , business_id
        return res.json(deleteTool);
    });
}
exports.deleteTool = deleteTool;
function updateTool(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tool_id = req.params.id;
        const updateTool = req.body;
        console.log(req.params.customer_id);
        const updateId = yield database_1.default.query('update cp_tools set ? where tool_id = ? ', [updateTool, tool_id]); // days_vigency > 0  and business_id = ?    updateCustomer, , business_id
        return res.json(updateId);
    });
}
exports.updateTool = updateTool;
