import { Request, Response } from "express";

import { ICalculations } from './interfaces'

import CalculationsService from "@services/calculations"
import JWTService from "@src/services/JWTService";

import UsersRepository from "@repository/database/users"
import CalculationRepository from "@repository/database/calculations"

import { User } from "@src/models/dbm/User";
import { PairComparsionResult } from "@src/models/dtm/calculations";

class Calculations implements ICalculations {
    async createControllerBuilder <Input, Output>(
        service: (
            data: Input,
            x: number,
            y: number
        ) => Output,
        data: Input,
        x: number,
        y: number,
        req: Request,
        res: Response,
        repo?: (
            inputMatrix: Input, 
            x: number, 
            y: number, 
            result: Output, 
            user: User
        ) => Promise<boolean>,
    ) {
        const result = service(data, x, y);
        let token = req.header("Authorization");
        if (token) {
            if (token.startsWith("Bearer ")) {
                token = token.slice(7, token.length);
            }
            const decodedToken = await JWTService.verifyAndDecode(token);
            if (decodedToken instanceof Error) {
                res.json(result);
                return;
            }
            const user = await UsersRepository.getUserByID(decodedToken.id)
            if (repo) {
                let savedResult = await repo(data, x, y, result, user)
                res.json({result, savedResult});
                return;
            }
            res.json(result);
            return;
        }
        res.json(result);
    }
    
    pairComparsion = async (req: Request, res: Response) => {
        try {
            this.createControllerBuilder(
                CalculationsService.pairComparsion, 
                req.body.binaryMatrix, 
                req.body.x, 
                req.body.y, 
                req, 
                res,
                CalculationRepository.createPairComparsion
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
                req, 
                res
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
                req, 
                res
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
                req, 
                res
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
                req, 
                res
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
                req, 
                res
            )
        } catch (e) {
            console.log(e)
        }
    }
}

export default new Calculations();
