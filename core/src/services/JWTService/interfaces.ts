import { IJWT } from "@src/models/contracts/JWTContracts";

export interface IJWTService {
    generate: (id: string, role: number) => Promise<IJWT | string>;
    verify: (token: string) => Promise<IJWT>;
}
