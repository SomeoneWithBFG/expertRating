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

    createCalc: (
        inputMatrix: number[][] | SequentiallyComparisonInputMatrixElement[],
        x: number,
        y: number,
        method: string,
        user: User,
        result:
            | PairComparsionResult
            | SequentiallyComparisonResult
            | WeighingResult
            | PreferenceResult
            | KondorseResult
            | KemeniSnellaResult
    ) => Promise<Calculation>

    deleteCalculation: (id: string) => Promise<boolean>
}
