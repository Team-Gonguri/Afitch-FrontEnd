import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ColumnContainer, Input, Button } from '../atoms';
import { signIn } from '../../../repo/auth';
import useUser from '../../../hook/useUser';
import useLocalStorage from '../../../hook/useLocalStorage';

interface SignInInfoProps {
  remember: boolean;
  setRemember: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignInInfo({ remember, setRemember }: SignInInfoProps) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const { setUser } = useUser();
  const { getLocalStorage, setLocalStorage, removeLocalStorage } =
    useLocalStorage();
  const history = useHistory();

  const initId = () => {
    const data = getLocalStorage('afitch-id');
    if (data) {
      setId(data);
      setRemember(true);
    }
  };

  useEffect(initId, []);

  const inputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    set: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    set(e.target.value);
  };

  const signInBtnClicked = () => {
    if (!id) {
      alert('아이디를 입력하세요.');
      return;
    }

    if (!pw) {
      alert('비밀번호를 입력하세요.');
      return;
    }

    const payload = { accountId: id, password: pw };

    signIn(payload)
      .then((d) => {
        setLocalStorage('afitch-login', {
          id,
          nickName: '',
          accessToken: d.data.accessToken,
        });
        setUser({ id, nickName: '', accessToken: d.data.accessToken });
        if (remember) {
          setLocalStorage('afitch-id', id);
        } else {
          removeLocalStorage('afitch-id');
        }

        history.replace('/afitch/fitness');
      })
      .catch((e) => {
        console.error(e);
        alert('아이디/비밀번호가 일치하지 않습니다.');
      });
  };

  return (
    <ColumnContainer padding="0px">
      <Input
        marginBottom="12px"
        placeholder="id"
        value={id}
        onChange={(e) => {
          inputChange(e, setId);
        }}
      />
      <Input
        marginBottom="26px"
        placeholder="p/w"
        type="password"
        value={pw}
        onChange={(e) => {
          inputChange(e, setPw);
        }}
      />
      <Button marginBottom="12px" width="380px" onClick={signInBtnClicked}>
        로그인
      </Button>
    </ColumnContainer>
  );
}

export default SignInInfo;
