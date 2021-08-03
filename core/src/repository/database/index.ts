import connector from './connector'
import UsersService from './users'
import GroupService from './groups'

import IDB, { IConnector, IUsersService, IGroupService } from './interfaces'

class DB implements IDB {
    connector: IConnector
    users: IUsersService
    groups: IGroupService

    constructor() {
        this.connector = connector
        this.users = UsersService
        this.groups = GroupService
    }
}

export default new DB()
