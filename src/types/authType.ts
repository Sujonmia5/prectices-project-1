export interface IAuthData {
  message: string;
  success: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
