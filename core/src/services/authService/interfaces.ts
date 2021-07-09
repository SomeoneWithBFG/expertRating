import { IAuth } from "@src/models/contracts/authContracts";

export interface IAuthService {
    generate: (id: string, role: number) => Promise<IAuth | string>;
    verify: (token: string) => Promise<IAuth>;
}