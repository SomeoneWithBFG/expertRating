import { Request, Response } from 'express'

export interface IGroupController {
    getGroupList: (req: Request, res: Response) => void
    getGroupByID: (req: Request, res: Response) => void
    createGroup: (req: Request, res: Response) => void
    updateGroup: (req: Request, res: Response) => void
    deleteGroup: (req: Request, res: Response) => void
}
