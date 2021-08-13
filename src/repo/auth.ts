import axios from 'axios';

import { defaultHeaders } from './_axios';

import {
  IdDuplicateParams,
  NickNameDuplicateParams,
  RefreshReq,
  RefreshRes,
  SignUpReq,
  SignUpRes,
  SignInReq,
  SignInRes,
} from '../entity/repo/auth';

export async function idDuplicate({ id }: IdDuplicateParams) {
  const req = await axios.get<boolean>('/auth/id-duplicate', {
    params: { id },
    headers: { ...defaultHeaders },
  });

  return req;
}

export async function nickNameDuplicate({ nickName }: NickNameDuplicateParams) {
  const req = await axios.get<boolean>('/auth/nickname-duplicate', {
    params: { nickName },
  });

  return req;
}

export async function refresh(payload: RefreshReq) {
  const req = await axios.post<RefreshRes>('/auth/refresh', { ...payload });

  return req;
}

export async function signIn(payload: SignInReq) {
  const req = await axios.post<SignInRes>('/auth/sign-in', { ...payload }, {});

  return req;
}

export async function signUp(
  payload: SignUpReq,
  role: 'ROLE_USER' | 'ROLE_ADMIN',
) {
  const req = await axios.post<SignUpRes>(
    '/auth/sign-up',
    { ...payload },
    { headers: { ...defaultHeaders }, params: { role } },
  );

  return req;
}
