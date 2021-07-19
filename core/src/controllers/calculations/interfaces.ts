import { Request, Response } from 'express'

export interface ICalculations {
    getCalculationList: (req: Request, res: Response) => void
    getCalculationListByUserID: (req: Request, res: Response) => void
    getCalculationByID: (req: Request, res: Response) => void
    deleteCalculation: (req: Request, res: Response) => void

    pairComparsion: (req: Request, res: Response) => void
    sequentiallyComparison: (req: Request, res: Response) => void
    weighing: (req: Request, res: Response) => void
    preference: (req: Request, res: Response) => void
    kondorse: (req: Request, res: Response) => void
    kemeniSnella: (req: Request, res: Response) => void
}
