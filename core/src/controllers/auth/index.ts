import { Request, Response } from "express";

import { IAuthController } from "./interfaces";

import UsersRepository from "@repository/database/users"

import MessageGenerator from "@services/messageGenerator";
import AuthService from "@services/authService";

class AuthController implements IAuthController {
    async login (req: Request, res: Response) {
        const login = req.body.login;
        const password = req.body.password;
        const user = await UsersRepository.login(login, password)
        if (!user) {
            res.json(MessageGenerator.createMessage(403, "error", "Invalid login or/and password"))
            return;
        } 
        else {
            const tokens = AuthService.generate(user.id, user.role)
            res.json(tokens)
            return;
        }
    }
    async refreshToken (req: Request, res: Response) {
        const value = await AuthService.verify(req.body.refreshToken);
        let id = "";
        let role = 0;
        if (value && value.decoded) {
            id = value.decoded.id
            role = value.decoded.role
        }
        if (value instanceof Error) {
            res.json(MessageGenerator.createMessage(500, "error", "JWT not found"));
            return;
        } 
        else {
            const value = await AuthService.generate(id, role);
            if (value instanceof Error) {
                res.json(MessageGenerator.createMessage(500, "error", "JWT undefined error"));
                return;
            }
            res.status(200).json(value);
        }
    };
}

export default new AuthController();
