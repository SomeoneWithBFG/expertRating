import { User } from '@models/dbm/User'
import { Calculation } from '@models/dbm/Calculation'
import {
    PairComparsionResult,
    SequentiallyComparisonResult,
    WeighingResult,
    PreferenceResult,
    KondorseResult,
    KemeniSnellaResult,
} from '@models/dbm/CalculationResult'

import { ICalculationService } from './interfaces'
import * as CalculationDTM from '@models/dtm/calculations'

import DBConnector from './connector'

import MessageGenerator from '@services/messageGenerator'

class CalculationService implements ICalculationService {
    UserRepository = () => {
        return DBConnector.connector?.getRepository(User)
    }
    CalculationRepository = () => {
        return DBConnector.connector?.getRepository(Calculation)
    }

    getCalculationList = async () => {
        try {
            const response = await this.CalculationRepository().find({
                relations: ['results'],
            })
            return response
        } catch (e) {
            return e
        }
    }
    getCalculationByID = async (id: string) => {
        try {
            const response = await this.CalculationRepository().findOne(id, {
                relations: ['results'],
            })
            if (!response) {
                return MessageGenerator.createMessage(
                    404,
                    'error',
                    'User with this ID not found'
                )
            }
            return response
        } catch (e) {
            return e
        }
    }
    getCalculationListByUserID = async (userId: string) => {
        try {
            const response = await this.UserRepository()
                .createQueryBuilder('user')
                .where('user.id = :id', { id: userId })
                .leftJoinAndSelect('user.calculations', 'calculation')
                .leftJoinAndSelect(
                    'calculation.kemeniSnellaResult',
                    'kemeniSnellaResult'
                )
                .leftJoinAndSelect(
                    'calculation.kondorseResult',
                    'kondorseResult'
                )
                .leftJoinAndSelect(
                    'calculation.pairComparsionResult',
                    'pairComparsionResult'
                )
                .leftJoinAndSelect(
                    'calculation.preferenceResult',
                    'preferenceResult'
                )
                .leftJoinAndSelect(
                    'calculation.sequentiallyComparisonResult',
                    'sequentiallyComparisonResult'
                )
                .leftJoinAndSelect(
                    'calculation.weighingResult',
                    'weighingResult'
                )
                .getOne()
            if (!response || !response.calculations) {
                return MessageGenerator.createMessage(
                    404,
                    'error',
                    'User with this ID not found'
                )
            }
            return response.calculations
        } catch (e) {
            return e
        }
    }

    createPairComparsion = async (
        result: CalculationDTM.PairComparsionResult
    ) => {
        try {
            const savedResult = await DBConnector.connector
                ?.getRepository(PairComparsionResult)
                .save({
                    values: JSON.stringify(result.values),
                    sumOfValues: result.sumOfValues,
                    weights: JSON.stringify(result.weights),
                    order: result.order,
                })

            return savedResult
        } catch (e) {
            console.log(e)
            return e
        }
    }
    createSequentiallyComparison = async (
        result: CalculationDTM.SequentiallyComparisonResult
    ) => {
        try {
            const savedResult = await DBConnector.connector
                ?.getRepository(SequentiallyComparisonResult)
                .save({
                    causedCorrections: result.causedCorrections,
                    correctedEvaluations: JSON.stringify(
                        result.correctedEvaluations
                    ),
                    sumOfWeights: result.sumOfWeights,
                    weights: JSON.stringify(result.weights),
                    order: result.order,
                })

            return savedResult
        } catch (e) {
            console.log(e)
            return e
        }
    }
    createWeighingResult = async (result: CalculationDTM.WeighingResult) => {
        try {
            const savedResult = await DBConnector.connector
                ?.getRepository(WeighingResult)
                .save({
                    sumOfMarks: result.sumOfMarks,
                    relativeExpertsMarks: JSON.stringify(
                        result.relativeExpertsMarks
                    ),
                    weights: JSON.stringify(result.weights),
                    order: result.order,
                })

            return savedResult
        } catch (e) {
            console.log(e)
            return e
        }
    }
    createPreferenceResult = async (
        result: CalculationDTM.PreferenceResult
    ) => {
        try {
            const savedResult = await DBConnector.connector
                ?.getRepository(PreferenceResult)
                .save({
                    modMatrix: JSON.stringify(result.modMatrix),
                    sumMarks: JSON.stringify(result.sumMarks),
                    sumOfMarks: result.sumOfMarks,
                    weights: JSON.stringify(result.weights),
                    order: result.order,
                })

            return savedResult
        } catch (e) {
            console.log(e)
            return e
        }
    }
    createKondorseResult = async (result: CalculationDTM.KondorseResult) => {
        try {
            const savedResult = await DBConnector.connector
                ?.getRepository(KondorseResult)
                .save({
                    modMatrix: JSON.stringify(result.modMatrix),
                    best: result.best,
                })

            return savedResult
        } catch (e) {
            console.log(e)
            return e
        }
    }
    createKemeniSnellaResult = async (
        result: CalculationDTM.KemeniSnellaResult
    ) => {
        try {
            const savedResult = await DBConnector.connector
                ?.getRepository(KemeniSnellaResult)
                .save({
                    binaryMatrixArray: JSON.stringify(result.binaryMatrixArray),
                    looseMatrix: JSON.stringify(result.looseMatrix),
                    order: result.order,
                })

            return savedResult
        } catch (e) {
            console.log(e)
            return e
        }
    }

    createCalc = async (
        inputMatrix:
            | number[][]
            | CalculationDTM.SequentiallyComparisonInputMatrixElement[],
        x: number,
        y: number,
        method: string,
        user: User,
        result:
            | CalculationDTM.PairComparsionResult
            | CalculationDTM.SequentiallyComparisonResult
            | CalculationDTM.WeighingResult
            | CalculationDTM.PreferenceResult
            | CalculationDTM.KondorseResult
            | CalculationDTM.KemeniSnellaResult
    ) => {
        try {
            let calcToSave = {
                method,
                inputMatrix: JSON.stringify(inputMatrix),
                x,
                y,
                user,
                pairComparsionResult:
                    CalculationDTM.isPairComparsionResult(result) ?
                    (await this.createPairComparsion(result)) : null,
                sequentiallyComparisonResult:
                    CalculationDTM.isSequentiallyComparisonResult(result) ?
                    (await this.createSequentiallyComparison(result)) : null,
                weighingResult:
                    CalculationDTM.isWeighingResult(result) ?
                    (await this.createWeighingResult(result)) : null,
                preferenceResult:
                    CalculationDTM.isPreferenceResult(result) ?
                    (await this.createPreferenceResult(result)) : null,
                kondorseResult:
                    CalculationDTM.isKondorseResult(result) ?
                    (await this.createKondorseResult(result)) : null,
                kemeniSnellaResult:
                    CalculationDTM.isKemeniSnellaResult(result) ?
                    (await this.createKemeniSnellaResult(result)) : null,
            }
            const savedCalculation = await this.CalculationRepository().save(
                calcToSave
            )
            return savedCalculation
        } catch (e) {
            return e
        }
    }

    deleteCalculation = async (id: string) => {
        try {
            const response = await this.CalculationRepository().delete(id)
            if (!response.affected) {
                return MessageGenerator.createMessage(
                    404,
                    'error',
                    'User with this ID not found'
                )
            }
            return !!response.affected
        } catch (e) {
            return e
        }
    }
}

export default new CalculationService()
