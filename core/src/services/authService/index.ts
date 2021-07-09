const jwt = require('jsonwebtoken');

const JWT_SECRET = "WkVoS05XUkhPVzFoVnpWcllsZFZQUT09";

import { IAuthService } from "./interfaces";

class AuthService implements IAuthService {
  generate = (id: string, role: number) => {
    try {
        const accessToken = jwt.sign({ id, role }, JWT_SECRET, { expiresIn: "10m" });
        const refreshToken = jwt.sign({ id, role }, JWT_SECRET, { expiresIn: "3d" });
        return {
            accessToken,
            refreshToken,
            expires_in: jwt.decode(accessToken).exp,
        };
    } catch (err) {
        return err;
    }
  };

  verify = async (token: string) => {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return { value: { decoded } };
    } catch (err) {
      return err;
    }
  };
}

export default new AuthService();
