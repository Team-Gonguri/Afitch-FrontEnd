import { format } from 'prettier';
import { atom } from 'recoil';

import useLocalStorage from '../hook/useLocalStorage';

export interface User {
  id: string;
  nickName: string;
  accessToken: string;
}

export const userStore = atom<User>({
  key: 'user',
  default: initUser(),
});

function initUser() {
  const { getLocalStorage } = useLocalStorage();

  const user = getLocalStorage('afitch-login');

  if (user) {
    return { ...user };
  } else {
    return { id: '', nickName: '', accessToken: '' };
  }
}
