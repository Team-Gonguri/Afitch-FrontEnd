import axios from 'axios';

import {
  GetExercisesRes,
  GetExercisesParams,
  GetExerciseDetailParams,
  GetExerciseDetailRes,
  GetCategoriesRes,
} from '../entity/repo/exercise-controller';

export async function getExercises(
  accessToken: string,
  params: GetExercisesParams,
) {
  const req = await axios.get<GetExercisesRes>('/exercises', {
    headers: { Authorization: accessToken },
    params: { ...params },
  });

  return req;
}

export async function getExerciseDetail(
  accessToken: string,
  params: GetExerciseDetailParams,
) {
  const req = await axios.get<GetExerciseDetailRes>(
    `/exercises/${params.exerciseId}`,
    {
      headers: { Authorization: accessToken },
    },
  );

  return req;
}

export async function getCategories(accessToken: string) {
  const req = await axios.get<GetCategoriesRes>('/exercises/categories', {
    headers: {
      Authorization: accessToken,
    },
  });

  return req;
}
