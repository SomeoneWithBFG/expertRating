import { Request, Response, NextFunction } from 'express'
import JWTService from '@src/services/JWTService'
import MessageGenerator from '@src/services/messageGenerator'

const IsAdminOrTeacher = async (req: Request, res: Response, next: NextFunction) => {
    let isAdminOrTeacher = false
    let token = req.header('Authorization')
    if (token) {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length)
        }
        const decodedToken = await JWTService.verifyAndDecode(token)
        if (decodedToken.role === 2 || decodedToken.role === 1) {
            isAdminOrTeacher = true
        } else {
            isAdminOrTeacher = false
        }
    }
    if (!isAdminOrTeacher) {
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

export default IsAdminOrTeacher
