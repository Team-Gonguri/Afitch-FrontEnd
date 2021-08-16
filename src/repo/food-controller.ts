import axios from 'axios';
import { access } from 'fs';

import {
  GetFoodCategoryRes,
  GetFoodSearchParmas,
  GetFoodSearchRes,
} from '../entity/repo/food-controller';

export async function foodCategories(accessToken: string) {
  const req = await axios.get<GetFoodSearchRes>('/food/categories', {
    headers: {
      Authorization: accessToken,
    },
  });

  return req;
}

export async function foodSearch(
  accessToken: string,
  params: GetFoodSearchParmas,
) {
  const req = await axios.get<GetFoodSearchRes>('/food/search', {
    headers: {
      Authorization: accessToken,
    },
    params: { ...params },
  });

  return req;
}
