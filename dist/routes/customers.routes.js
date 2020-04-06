"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const customers_controller_1 = require("../controllers/customers.controller");
router.route('/')
    .get(customers_controller_1.getCustomers);
router.route('/:id')
    .get(customers_controller_1.getCustomer)
    .post(customers_controller_1.createCustomer)
    .put(customers_controller_1.updateCustomer)
    .delete(customers_controller_1.deleteCustomer);
exports.default = router;
