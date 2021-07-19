import { Request, Response, NextFunction } from 'express'
import JWTService from '@src/services/JWTService'

const AddUserId = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.header('Authorization')
    if (token) {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length)
        }
        const decodedToken = await JWTService.verifyAndDecode(token)
        if (decodedToken instanceof Error) {
            req.body.reqUserId = false
        }
        req.body.reqUserId = decodedToken.id
    }
    next()
}

export default AddUserId
