import { User } from '@models/dbm/User'
import { Calculation } from '@models/dbm/Calculation'

import { IUserDTM } from '@models/dtm/User'

import {
    PairComparsionResult,
    SequentiallyComparisonInputMatrixElement,
    SequentiallyComparisonResult,
    WeighingResult,
    PreferenceResult,
    KondorseResult,
    KemeniSnellaResult,
} from '@models/dtm/calculations'

export interface IConnector {
    createConnection: () => void
}

export default interface IDB {
    connector: IConnector
    users: IUsersService
}

export interface IUsersService {
    getUserList: () => Promise<User[]>
    getUserByID: (id: string) => Promise<User>
    createUser: (data: IUserDTM) => Promise<User>
    updateUser: (id: string, data: IUserDTM) => Promise<User>
    deleteUser: (id: string) => Promise<boolean>
    login: (login: string, password: string) => Promise<User>
}

export interface ICalculationService {
    getCalculationList: () => Promise<Calculation[]>
    getCalculationListByUserID: (userId: string) => Promise<Calculation[]>
    getCalculationByID: (id: string) => Promise<Calculation>

    createPairComparsion: (
        inputMatrix: number[][],
        x: number,
        y: number,
        result: PairComparsionResult,
        user: User
    ) => Promise<boolean>
    createSequentiallyComparison: (
        inputMatrix: SequentiallyComparisonInputMatrixElement[],
        x: number,
        y: number,
        result: SequentiallyComparisonResult,
        user: User
    ) => Promise<boolean>
    createWeighing: (
        inputMatrix: number[][],
        x: number,
        y: number,
        result: WeighingResult,
        user: User
    ) => Promise<boolean>
    createPreference: (
        inputMatrix: number[][],
        x: number,
        y: number,
        result: PreferenceResult,
        user: User
    ) => Promise<boolean>
    createKondorse: (
        inputMatrix: number[][],
        x: number,
        y: number,
        result: KondorseResult,
        user: User
    ) => Promise<boolean>
    createKemeniSnella: (
        inputMatrix: number[][],
        x: number,
        y: number,
        result: KemeniSnellaResult,
        user: User
    ) => Promise<boolean>

    deleteCalculation: (id: string) => Promise<boolean>
}
