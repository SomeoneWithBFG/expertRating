import UserService from "./UserService";

import {
  IUserService,
} from "./layerInterfaces";

class UseCases {
  userService: IUserService;

  constructor() {
    this.userService = UserService;
  }
}

export default new UseCases();
