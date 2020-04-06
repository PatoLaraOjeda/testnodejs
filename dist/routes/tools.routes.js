"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const tools_controller_1 = require("../controllers/tools.controller");
router.route('/')
    .get(tools_controller_1.getTools);
router.route('/:id')
    .get(tools_controller_1.getTool)
    .post(tools_controller_1.createTool)
    .put(tools_controller_1.updateTool)
    .delete(tools_controller_1.deleteTool);
exports.default = router;
