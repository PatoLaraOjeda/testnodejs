"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./auth"));
class SomeClass {
    myFnct() {
        auth_1.default.hashPassword('myPassword', 12, (err, hash) => {
            if (err) {
                // throw and error
            }
            else {
                // store the new hash in the database etc
            }
        });
    }
}
exports.default = SomeClass;
