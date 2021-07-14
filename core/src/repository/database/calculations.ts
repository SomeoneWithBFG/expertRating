import { User } from "@models/dbm/User";
import { Calculation } from "@models/dbm/Calculation";
import { 
    PairComparsionResult,
    SequentiallyComparisonResult,
    WeighingResult,
    PreferenceResult,
    KondorseResult,
    KemeniSnellaResult
} from "@models/dbm/CalculationResult";

import { ICalculationService } from "./interfaces";
import * as CalculationDTM from "@models/dtm/calculations"

import DBConnector from "./connector";

import MessageGenerator from "@services/messageGenerator";

class CalculationService implements ICalculationService {
    UserRepository = () => {
        return DBConnector.connector?.getRepository(User)
    }
    CalculationRepository = () => {
        return DBConnector.connector?.getRepository(Calculation)
    }

    getCalculationList = async () => {
        try {
            const response = await this.CalculationRepository().find({ relations: ["results"] });
            return response ;
        } catch (e) {
            return e;
        }
    }
    getCalculationByID = async (id: string) => {
        try {
            const response = await this.CalculationRepository().findOne(id, { relations: ["results"] });
            if (!response) {
                return MessageGenerator.createMessage(404, "error", "User with this ID not found")
            }
                return response;
        } catch (e) {
            return e;
        }
    }
    getCalculationListByUserID = async (userId: string) => {
        try {
            const response = await this.UserRepository()
                .createQueryBuilder("user")
                .where("user.id = :id", { id: userId })
                .leftJoinAndSelect("user.calculations", "calculation")
                .leftJoinAndSelect("calculation.kemeniSnellaResult", "kemeniSnellaResult")
                .leftJoinAndSelect("calculation.kondorseResult", "kondorseResult")
                .leftJoinAndSelect("calculation.pairComparsionResult", "pairComparsionResult")
                .leftJoinAndSelect("calculation.preferenceResult", "preferenceResult")
                .leftJoinAndSelect("calculation.sequentiallyComparisonResult", "sequentiallyComparisonResult")
                .leftJoinAndSelect("calculation.weighingResult", "weighingResult")
                .getOne();
            if (!response || !response.calculations) {
                return MessageGenerator.createMessage(404, "error", "User with this ID not found")
            }
            return response.calculations;
        } catch (e) {
            return e;
        }
    }

    createPairComparsion = async (
        inputMatrix: number[][], 
        x: number, 
        y: number, 
        result: CalculationDTM.PairComparsionResult,
        user: User
    ) => {
        try {
            const savedResult = await DBConnector.connector?.getRepository(PairComparsionResult).save({
                values: JSON.stringify(result.values),
                sumOfValues: result.sumOfValues,
                weights: JSON.stringify(result.weights),
                order: result.order,
            })

            const savedCalculation = await this.CalculationRepository().save({
                method: "PairComparsion",
                inputMatrix: JSON.stringify(inputMatrix),
                x: x,
                y: y,
                user: user,
                pairComparsionResult: savedResult,
            })

            return true
        } catch(e) {
            console.log(e)
            return false
        }
    };
    createSequentiallyComparison: (
        inputMatrix: CalculationDTM.SequentiallyComparisonInputMatrixElement[],
        x: number, 
        y: number, 
        result: CalculationDTM.SequentiallyComparisonResult,
        user: User
    ) => Promise<boolean>;
    createWeighing: (
        inputMatrix: number[][], 
        x: number, 
        y: number, 
        result: CalculationDTM.WeighingResult,
        user: User
    ) => Promise<boolean>;
    createPreference: (
        inputMatrix: number[][], 
        x: number, 
        y: number, 
        result: CalculationDTM.PreferenceResult,
        user: User
    ) => Promise<boolean>;
    createKondorse: (
        inputMatrix: number[][], 
        x: number, 
        y: number, 
        result: CalculationDTM.KondorseResult,
        user: User
    ) => Promise<boolean>;
    createKemeniSnella: (
        inputMatrix: number[][], 
        x: number, 
        y: number, 
        result: CalculationDTM.KemeniSnellaResult,
        user: User
    ) => Promise<boolean>;

    deleteCalculation: (id: string) => Promise<boolean>;
}

export default new CalculationService();
