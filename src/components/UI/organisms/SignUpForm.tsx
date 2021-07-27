import React, { useRef } from 'react';

import { Button, ColumnContainer } from '../atoms';
import { InputBox, InputBoxButton } from '../molecules';

function SignUpForm() {
  const idInput = useRef<HTMLInputElement>(null);
  const nickNameInput = useRef<HTMLInputElement>(null);
  const pwInput = useRef<HTMLInputElement>(null);
  const confrimPwInput = useRef<HTMLInputElement>(null);

  const confirmPw = () => {
    console.log('sdsd');
    if (pwInput.current && confrimPwInput.current)
      return pwInput.current.value === confrimPwInput.current.value;
    return false;
  };

  const onBtnClicked = () => {
    console.log('asdf');
    if (!confirmPw()) {
      alert('비밀번호가 일치하지 않습니다.');
      if (confrimPwInput.current) confrimPwInput.current.value = '';
    }
  };

  return (
    <ColumnContainer>
      <InputBoxButton text="아이디" btnText="중복확인" iRef={idInput} />
      <InputBoxButton
        text="닉네임"
        btnText="중복확인"
        iRef={nickNameInput}
        marginBottom="10px"
      />
      <InputBox
        type="password"
        text="비밀번호"
        iRef={pwInput}
        marginBottom="10px"
      />
      <InputBox
        type="password"
        text="비밀번호 확인"
        iRef={confrimPwInput}
        marginBottom="40px"
      />
      <Button width="380px" onClick={onBtnClicked}>
        회원가입
      </Button>
    </ColumnContainer>
  );
}

export default SignUpForm;
