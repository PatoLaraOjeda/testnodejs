"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const generalsoncodes_controller_1 = require("../controllers/generalsoncodes.controller");
router.route('/')
    .get(generalsoncodes_controller_1.getSonCodes);
router.route('/:id')
    .get(generalsoncodes_controller_1.getSonCode)
    .post(generalsoncodes_controller_1.createSonCode)
    .put(generalsoncodes_controller_1.updateSonCode)
    .delete(generalsoncodes_controller_1.deleteSonCode);
exports.default = router;
