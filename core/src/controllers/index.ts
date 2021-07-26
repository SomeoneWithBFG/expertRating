import UserController from './users'

import { IUserController } from './users/interfaces'

class UseCases {
    userService: IUserController

    constructor() {
        this.userService = UserController
    }
}

export default new UseCases()
