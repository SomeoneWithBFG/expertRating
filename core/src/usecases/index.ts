import UserService from "./users";

import {
  IUserService,
} from "./users/interfaces";

class UseCases {
  userService: IUserService;

  constructor() {
    this.userService = UserService;
  }
}

export default new UseCases();
