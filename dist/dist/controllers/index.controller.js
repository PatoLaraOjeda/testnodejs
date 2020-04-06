"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function indexWelcome(req, res) {
    const apiWorks = 'OFISOFT_API_CONNECTED_ON ' + new (Date);
    return res.json(apiWorks);
}
exports.indexWelcome = indexWelcome;
;
