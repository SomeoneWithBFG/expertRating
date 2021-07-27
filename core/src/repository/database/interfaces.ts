import { User } from '@models/dbm/User'
import { Calculation } from '@models/dbm/Calculation'
import { Group } from '@models/dbm/Group'

import { IUserDTM } from '@models/dtm/User'
import { IGroupDTM } from '@models/dtm/Group'

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
    getUserListByIds: (ids: string[]) => Promise<User[]>
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

    createCalculation: (
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

export interface IGroupService {
    getGroupList: () => Promise<Group[]>
    getGroupByID: (id: string) => Promise<Group>
    createGroup: (
        data: IGroupDTM,
        students: User[],
        teacher: User
    ) => Promise<Group>
    updateGroup: (
        id: string,
        group: IGroupDTM,
        students: User[],
        teacher: User
    ) => Promise<Group>
    addUsers: (group: Group, students: User[], teacher: User) => Promise<Group>
    deleteGroup: (id: string) => Promise<boolean>
}
