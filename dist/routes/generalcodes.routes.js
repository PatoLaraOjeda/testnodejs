"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const generalcodes_controller_1 = require("../controllers/generalcodes.controller");
router.route('/')
    .get(generalcodes_controller_1.getCodes);
router.route('/:id')
    .get(generalcodes_controller_1.getCode)
    .post(generalcodes_controller_1.createCode)
    .put(generalcodes_controller_1.updateCode)
    .delete(generalcodes_controller_1.deleteCode);
exports.default = router;
