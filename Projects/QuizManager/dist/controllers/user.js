"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const registerUser = (req, res, next) => {
    console.log(req.body);
    res.send("Registration DOne");
};
exports.registerUser = registerUser;
