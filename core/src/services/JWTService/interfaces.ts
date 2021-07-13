import { IJWT } from "@src/models/contracts/JWTContracts";

export interface IJWTService {
    generate: (id: string, role: number) => Promise<IJWT | string>;
    verifyAndDecode: (token: string) => Promise<IJWT>;
}
