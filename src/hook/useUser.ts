import { useRecoilState } from 'recoil';

import { userStore } from '../store/atom';

function useUser() {
  const [user, setUser] = useRecoilState(userStore);

  return { user, setUser };
}

export default useUser;
