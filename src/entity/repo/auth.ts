export interface IdDuplicateParams {
  id: string;
}

export interface NickNameDuplicateParams {
  nickName: string;
}

export interface RefreshReq {
  refreshToken: string;
}

export interface RefreshRes {
  accessToken: string;
}

export interface SignInReq {
  accountId: string;
  password: string;
}

export interface SignInRes {
  access: Token;
  refresh: Token;
}

interface Token {
  token: string;
  expiredIn: number;
}

export interface SignUpReq {
  accountId: string;
  adminCode: string;
  nickName: string;
  password: string;
}

export interface SignUpRes {
  accessToken: string;
  refreshToken: string;
}
