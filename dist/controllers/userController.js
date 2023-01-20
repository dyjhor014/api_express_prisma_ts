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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class userController {
    static getUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield prisma.user.findMany();
            res.json(users);
        });
    }
    static createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            const user = yield prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: password
                },
            });
            res.json({ message: 'Usuario creado exitosamente', user: user });
        });
    }
}
exports.userController = userController;