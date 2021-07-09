import ExecJWT from "./ExecJWT";
import isAuth from "./isAuth";

class Middleware {
  executeJWT: any;
  isAuth: any;

  constructor() {
    this.executeJWT = ExecJWT;
    this.isAuth = isAuth;
  }
}

export default new Middleware();
