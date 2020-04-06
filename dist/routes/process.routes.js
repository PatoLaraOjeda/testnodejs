"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const process_controller_1 = require("../controllers/process.controller");
router.route('/')
    .get(process_controller_1.getProcesses);
router.route('/:id')
    .get(process_controller_1.getProcess)
    .post(process_controller_1.createProcess)
    .put(process_controller_1.updateProcess)
    .delete(process_controller_1.deleteProcess);
exports.default = router;
