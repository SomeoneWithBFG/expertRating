import { Request, Response, NextFunction } from 'express'

import ValidateJWT from './ValidateJWT'
import AddUserId from './AddUserId'

class Middleware {
    validateJWT: (
        req: Request,
        res: Response,
        next: NextFunction
    ) => Promise<void>
    addUserId: (
        req: Request,
        res: Response,
        next: NextFunction
    ) => Promise<void>

    constructor() {
        this.validateJWT = ValidateJWT
        this.addUserId = AddUserId
    }
}

export default new Middleware()
