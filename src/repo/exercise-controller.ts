import axios from 'axios';

export async function getCategories(accessToken: string) {
  const req = axios.get('/exercises/categories', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return req;
}

export {};
