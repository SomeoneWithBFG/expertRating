import { Request, Response } from 'express'

export interface ICalculations {
    pairComparsion: (req: Request, res: Response) => void
    sequentiallyComparison: (req: Request, res: Response) => void
    weighing: (req: Request, res: Response) => void
    preference: (req: Request, res: Response) => void
    kondorse: (req: Request, res: Response) => void
    kemeniSnella: (req: Request, res: Response) => void
}
