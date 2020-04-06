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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcryptjs"));
const database_1 = __importDefault(require("../database"));
class Auth {
    static hashPassword(password, rounds, callback) {
        bcrypt.hash(password, rounds, (error, hash) => {
            callback(error, hash);
        });
    }
    static compare(password, dbHash, callback) {
        bcrypt.compare(password, dbHash, (err, match) => {
            if (match) {
                // passwords match
                callback(null, true);
            }
            else {
                // passwords does not match
                callback(null, false);
            }
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const username = req.body.username;
            const password = req.body.password;
            const result = yield database_1.default.query('SELECT password FROM users WHERE username = ?', [username]);
            const userfound = JSON.stringify(result);
            if (userfound.length > 0) {
                const pwd = userfound[0];
                Auth.compare(password, pwd, (error, match) => {
                    if (error) {
                        return (false);
                    }
                    else {
                        return (true);
                    }
                });
            }
        });
    }
}
exports.default = Auth;
