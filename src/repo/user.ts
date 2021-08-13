import axios from 'axios';

import {
  GetUserInfoParmas,
  DetailUserInfoResponse,
  UpdateUserInfoParams,
  UpdateUserInfoRequest,
  SimpleUserInfoResponse,
} from '../entity/repo/user';

export async function detailUserInfo(
  accessToken: string,
  params: GetUserInfoParmas,
) {
  const req = await axios.get<DetailUserInfoResponse>('/user', {
    headers: {
      Authorization: accessToken,
    },
    params: {
      ...params,
    },
  });
  return req;
}

export async function modifyUserInfo(
  accessToken: string,
  params: UpdateUserInfoParams,
  payload: UpdateUserInfoRequest,
) {
  const req = await axios.put(
    '/user',
    {
      ...payload,
    },
    {
      headers: {
        Authorization: accessToken,
      },
      params: {
        ...params,
      },
    },
  );

  return req;
}
