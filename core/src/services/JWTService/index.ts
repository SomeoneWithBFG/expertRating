const jwt = require("jsonwebtoken");

import { IJWTService } from "./interfaces";

class JWTService implements IJWTService {
  generate = (id: string, role: number) => {
    try {
      const accessToken = jwt.sign({ id, role }, process.env.JWT_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXP_IN,
      });
      const refreshToken = jwt.sign({ id, role }, process.env.JWT_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXP_IN,
      });
      return {
        accessToken,
        refreshToken,
        expires_in: jwt.decode(accessToken).exp,
      };
    } catch (err) {
      return err;
    }
  };

  verifyAndDecode = async (token: string) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded;
    } catch (err) {
      return err;
    }
  };
}

export default new JWTService();
