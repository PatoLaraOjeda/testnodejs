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
function getProfile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const username = req.params.username;
        const getProfile = yield database_1.default.query('select * from ofs_usuarios WHERE username = ?', [username]);
        return res.json(getProfile);
    });
}
exports.getProfile = getProfile;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = req.body;
        const saveAgenda = yield database_1.default.query('insert into ofs_usuarios set ?', [newUser]);
        return res.json({
            message: 'CREATED'
        });
    });
}
exports.createUser = createUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const username = req.params.username;
        const deleteUser = yield database_1.default.query('update ofs_usuarios set vigente = "N" where username = ?', [username]);
        return res.json({
            message: 'DELETED'
        });
    });
}
exports.deleteUser = deleteUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const username = req.params.username;
        const updateUser = req.body;
        const updateId = yield database_1.default.query('update ofs_agenda set ? where id = ?', [updateUser, username]);
        return res.json({
            message: 'UPDATED'
        });
    });
}
exports.updateUser = updateUser;
