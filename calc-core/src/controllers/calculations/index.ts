import { Request, Response } from 'express'

import { ICalculations } from './interfaces'

import CalculationsService from '@services/calculations'

class Calculations implements ICalculations {
    async createControllerBuilder<Input, Output, Calc>(
        service: (data: Input, x: number, y: number) => Output,
        data: Input,
        x: number,
        y: number,
        req: Request,
        res: Response,
    ) {
        const result = service(data, x, y)
        res.json({result})
    }
    pairComparsion = async (req: Request, res: Response) => {
        try {
            this.createControllerBuilder(
                CalculationsService.pairComparsion,
                req.body.inputMatrix,
                req.body.x,
                req.body.y,
                req,
                res,
            )
        } catch (e) {
            res.json(e)
        }
    }
    sequentiallyComparison = async (req: Request, res: Response) => {
        try {
            this.createControllerBuilder(
                CalculationsService.sequentiallyComparison,
                req.body.inputMatrix,
                req.body.x,
                req.body.y,
                req,
                res,
            )
        } catch (e) {
            res.json(e)
        }
    }
    weighing = async (req: Request, res: Response) => {
        try {
            this.createControllerBuilder(
                CalculationsService.weighing,
                req.body.inputMatrix,
                req.body.x,
                req.body.y,
                req,
                res,
            )
        } catch (e) {
            res.json(e)
        }
    }
    preference = async (req: Request, res: Response) => {
        try {
            this.createControllerBuilder(
                CalculationsService.preference,
                req.body.inputMatrix,
                req.body.x,
                req.body.y,
                req,
                res,
            )
        } catch (e) {
            res.json(e)
        }
    }
    kondorse = async (req: Request, res: Response) => {
        try {
            this.createControllerBuilder(
                CalculationsService.kondorse,
                req.body.inputMatrix,
                req.body.x,
                req.body.y,
                req,
                res,
            )
        } catch (e) {
            res.json(e)
        }
    }
    kemeniSnella = async (req: Request, res: Response) => {
        try {
            this.createControllerBuilder(
                CalculationsService.kemeniSnella,
                req.body.inputMatrix,
                req.body.x,
                req.body.y,
                req,
                res,
            )
        } catch (e) {
            res.json(e)
        }
    }
}

export default new Calculations()
