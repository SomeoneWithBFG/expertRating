export interface IJWT {
  refreshToken: string;
  accessToken: string;
  expires_in?: any;
  decoded: any;
}
