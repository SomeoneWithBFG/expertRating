import { Request, Response } from 'express'

import { IAuthController } from './interfaces'

import UsersRepository from '@repository/database/users'

import MessageGenerator from '@services/messageGenerator'
import JWTService from '@src/services/JWTService'

class AuthController implements IAuthController {
    async login(req: Request, res: Response) {
        const login = req.body.login
        const password = req.body.password
        const user = await UsersRepository.login(login, password)
        if (!user) {
            res.json(
                MessageGenerator.createMessage(
                    403,
                    'error',
                    'Invalid login or/and password'
                )
            )
            return
        }
        const tokens = JWTService.generate(user.id, user.role)
        res.json(tokens)
    }
    async refreshToken(req: Request, res: Response) {
        const value = await JWTService.verifyAndDecode(req.body.refreshToken)
        if (value instanceof Error) {
            res.json(
                MessageGenerator.createMessage(500, 'error', 'JWT not found')
            )
            return
        }
        const jwt = await JWTService.generate(value.id, value.role)
        if (jwt instanceof Error) {
            res.json(
                MessageGenerator.createMessage(
                    500,
                    'error',
                    'JWT undefined error'
                )
            )
            return
        }
        res.status(200).json(jwt)
    }
    async whoAmI(req: Request, res: Response) { 
        const value = await JWTService.verifyAndDecode(req.body.accessToken)
        if (value instanceof Error) {
            res.json(
                MessageGenerator.createMessage(500, 'error', 'JWT not found')
            )
            return
        }
        const user = await UsersRepository.getUserByID(value.id)
        res.status(200).json(user)
    }
}

export default new AuthController()
