import { Request, Response, Application } from "express";

export interface ICalculations {
    pairComparsion: 
        (req: Request, res: Response) => Application;
    sequentiallyComparison: 
        (req: Request, res: Response) => Application;
    weighing: (req: Request, res: Response) => Application;
    preference: (req: Request, res: Response) => Application;
    kondorse: (req: Request, res: Response) => Application;
    kemeniSnella: (req: Request, res: Response) => Application;
}
