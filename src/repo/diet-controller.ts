import axios from 'axios';

import {
  GetDailyDietParmas,
  GetDailyDietRes,
  SaveDietParams,
  SaveDietReq,
  SaveDietRes,
  GetDietParams,
  GetDietRes,
} from '../entity/repo/diet-controller';

export async function getDailyDiet(
  accessToken: string,
  params: GetDailyDietParmas,
) {
  const req = await axios.get<GetDailyDietRes>('/diets/diet', {
    headers: {
      Authorization: accessToken,
    },
    params: {
      ...params,
    },
  });

  return req;
}

export async function saveDiet(
  accessToken: string,
  payload: SaveDietReq,
  params: SaveDietParams,
) {
  const req = await axios.post<SaveDietRes>(
    '/diets/meal',
    { ...payload },
    { headers: { Authorization: accessToken }, params: { ...params } },
  );

  return req;
}

export async function getDiet(
  accessToken: string,
  { mealId, ...params }: GetDietParams,
) {
  const rea = await axios.get<GetDietRes>(`/diets/meal/${mealId}`, {
    headers: {
      Authorization: accessToken,
    },
    params: { ...params },
  });
}
