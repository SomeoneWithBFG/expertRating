import { Request, Response, NextFunction } from 'express'

import ValidateJWT from './ValidateJWT'
import AddUserId from './AddUserId'
import IsAdmin from './IsAdmin'
import IsAdminOrTeacher from './isAdminOrTeacher'

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
    isAdmin: (
        req: Request,
        res: Response,
        next: NextFunction
    ) => Promise<void>
    isAdminOrTeacher: (
        req: Request,
        res: Response,
        next: NextFunction
    ) => Promise<void>

    constructor() {
        this.validateJWT = ValidateJWT
        this.addUserId = AddUserId
        this.isAdmin = IsAdmin
        this.isAdminOrTeacher = IsAdminOrTeacher
    }
}

export default new Middleware()
