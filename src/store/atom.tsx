import { format } from 'prettier';
import { atom } from 'recoil';

export interface User {
  id: string;
  nickName: string;
  accessToken: string;
}

export const userStore = atom<User>({
  key: 'user',
  default: {
    id: '',
    nickName: '',
    accessToken: '',
  },
});
