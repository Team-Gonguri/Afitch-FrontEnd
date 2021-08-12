export interface IdDuplicateParams {
  id: string;
}

export interface NickNameDuplicateParams {
  nickName: string;
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

export interface SignInReq {
  accountId: string;
  password: string;
}

export interface SignInRes {
  accessToken: string;
  refreshToken: string;
}

export {};
