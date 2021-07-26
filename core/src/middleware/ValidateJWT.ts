import { Request, Response, NextFunction } from 'express'
import JWTService from '@src/services/JWTService'
import MessageGenerator from '@src/services/messageGenerator'

const ValidateJWT = async (req: Request, res: Response, next: NextFunction) => {
    let isAuthorized = false
    let token = req.header('Authorization')
    if (token) {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length)
        }
        const value = await JWTService.verifyAndDecode(token)
        if (value instanceof Error) {
            isAuthorized = false
        } else {
            isAuthorized = value
        }
    }
    if (!isAuthorized) {
        res.json(
            MessageGenerator.createMessage(
                401,
                'error',
                'Token is not defined or not valid'
            )
        )
    } else {
        next()
    }
}

export default ValidateJWT
