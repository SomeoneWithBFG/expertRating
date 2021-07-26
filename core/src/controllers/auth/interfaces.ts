import { Request, Response } from 'express'

export interface IAuthController {
    login: (req: Request, res: Response) => void
    refreshToken: (req: Request, res: Response) => void
    whoAmI: (req: Request, res: Response) => void
}
