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
        if (!req.query.userId) {
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
            req.query.userId as string
        )

        res.json(result)
    }
    getCalculationByID = async (req: Request, res: Response) => {
        if (!req.query.id) {
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
            req.query.id as string
        )

        res.json(result)
    }

    deleteCalculation = async (req: Request, res: Response) => {
        if (!req.query.id) {
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
            req.query.id as string
        )
        if (wasDeleted) {
            const result = req.query.id

            res.json(result)
            return
        } else {
            res.json(wasDeleted)
            return
        }
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
        let token = req.header('Authorization')
        if (token) {
            if (token.startsWith('Bearer ')) {
                token = token.slice(7, token.length)
            }
            const decodedToken = await JWTService.verifyAndDecode(token)
            if (decodedToken instanceof Error) {
                res.json(result)
                return
            }
            const user = await UsersRepository.getUserByID(decodedToken.id)
            let savedResult = await repo(data, x, y, method, user, result)
            res.json({ result, savedResult })
            return
        }
        res.json(result)
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
                CalculationRepository.createCalc
            )
        } catch (e) {
            console.log(e)
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
                CalculationRepository.createCalc
            )
        } catch (e) {
            console.log(e)
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
                CalculationRepository.createCalc
            )
        } catch (e) {
            console.log(e)
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
                CalculationRepository.createCalc
            )
        } catch (e) {
            console.log(e)
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
                CalculationRepository.createCalc
            )
        } catch (e) {
            console.log(e)
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
                CalculationRepository.createCalc
            )
        } catch (e) {
            console.log(e)
        }
    }
}

export default new Calculations()
