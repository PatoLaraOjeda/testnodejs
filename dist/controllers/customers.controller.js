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
function getCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const customer_id = req.params.id;
        const getCustomer = yield database_1.default.query('SELECT * FROM cp_customers WHERE days_vigency > 0 and customer_id = ?', [customer_id]); // and business_id = ? , business_id
        return res.json(getCustomer);
    });
}
exports.getCustomer = getCustomer;
function getCustomers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const business_id = req.params.business_id;
        console.log(business_id);
        const getCustomers = yield database_1.default.query('SELECT * FROM cp_customers WHERE days_vigency > 0'); // and business_id = ? ', [business_id]
        return res.json(getCustomers);
    });
}
exports.getCustomers = getCustomers;
function createCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newCustomer = req.body;
        const saveCustomer = yield database_1.default.query('insert into cp_customers set ?', [newCustomer]);
        return res.json(saveCustomer);
    });
}
exports.createCustomer = createCustomer;
function deleteCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const customer_id = req.params.id;
        console.log(req.params.customer_id);
        const deleteCustomer = yield database_1.default.query('update cp_customers set days_vigency = 0 where customer_id = ?', [customer_id]); // and business_id = ? , business_id
        return res.json(deleteCustomer);
    });
}
exports.deleteCustomer = deleteCustomer;
function updateCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const customer_id = req.params.id;
        const updateCustomer = req.body;
        console.log(req.params.customer_id);
        const updateId = yield database_1.default.query('update cp_customers set ? where customer_id = ? ', [updateCustomer, customer_id]); // days_vigency > 0  and business_id = ?    updateCustomer, , business_id
        return res.json(updateId);
    });
}
exports.updateCustomer = updateCustomer;
