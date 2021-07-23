import { Request, Response } from 'express'

import { ICalculations } from './interfaces'

import CalculationsService from '@services/calculations'
import JWTService from '@src/services/JWTService'

import UsersRepository from '@repository/database/users'
import CalculationRepository from '@repository/database/calculations'

import { User } from '@src/models/dbm/User'
import * as CalculationDTM from '@src/models/dtm/calculations'

import messageGenerator from '@src/services/messageGenerator'

class Calculations implements ICalculations {
    getCalculationList = async (req: Request, res: Response) => {
        const result = await CalculationRepository.getCalculationList()

        res.json(result)
    }
    getCalculationListByUserID = async (req: Request, res: Response) => {
        if (!req.params.userId) {
            res.json(
                messageGenerator.createMessage(
                    404,
                    'error',
                    'User with this ID not found'
                )
            )
            return
        }
        const result = await CalculationRepository.getCalculationListByUserID(
            req.params.userId as string
        )

        res.json(result)
    }
    getCalculationByID = async (req: Request, res: Response) => {
        if (!req.params.id) {
            res.json(
                messageGenerator.createMessage(
                    404,
                    'error',
                    'Calculation with this ID not found'
                )
            )
            return
        }
        const result = await CalculationRepository.getCalculationByID(
            req.params.id as string
        )

        res.json(result)
    }

    deleteCalculation = async (req: Request, res: Response) => {
        if (!req.params.id) {
            res.json(
                messageGenerator.createMessage(
                    404,
                    'error',
                    'Calculation with this ID not found'
                )
            )
            return
        }
        const wasDeleted = await CalculationRepository.deleteCalculation(
            req.params.id as string
        )
        if (wasDeleted) {
            const result = req.params.id

            res.json(result)
            return
        }
        res.json(wasDeleted)
    }

    async createControllerBuilder<Input, Output, Calc>(
        service: (data: Input, x: number, y: number) => Output,
        data: Input,
        x: number,
        y: number,
        method: string,
        req: Request,
        res: Response,
        repo: (
            data: Input,
            x: number,
            y: number,
            method: string,
            user: User,
            result: Output
        ) => Calc
    ) {
        const result = service(data, x, y)
        if (req.body.reqUserId) {
            const user = await UsersRepository.getUserByID(req.body.reqUserId)
            let savedResult = await repo(data, x, y, method, user, result)
            res.json({ result, savedResult })
            return
        }
        res.json({result: result})
    }
    pairComparsion = async (req: Request, res: Response) => {
        try {
            this.createControllerBuilder(
                CalculationsService.pairComparsion,
                req.body.binaryMatrix,
                req.body.x,
                req.body.y,
                'pairComparsion',
                req,
                res,
                CalculationRepository.createCalculation
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
                'sequentiallyComparison',
                req,
                res,
                CalculationRepository.createCalculation
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
                'weighing',
                req,
                res,
                CalculationRepository.createCalculation
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
                'preference',
                req,
                res,
                CalculationRepository.createCalculation
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
                'kondorse',
                req,
                res,
                CalculationRepository.createCalculation
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
                'kemeniSnella',
                req,
                res,
                CalculationRepository.createCalculation
            )
        } catch (e) {
            res.json(e)
        }
    }
}

export default new Calculations()
