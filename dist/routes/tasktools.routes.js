"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const tasktools_controller_1 = require("../controllers/tasktools.controller");
router.route('/')
    .get(tasktools_controller_1.getTaskTools);
router.route('/:id')
    .get(tasktools_controller_1.getTaskTool)
    .post(tasktools_controller_1.createTaskTool)
    .put(tasktools_controller_1.updateTaskTool)
    .delete(tasktools_controller_1.deleteTaskTool);
exports.default = router;
