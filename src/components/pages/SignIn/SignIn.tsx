import React, { useState } from 'react';

import { ColumnContainer, Button, Logo } from '../../UI/atoms';
import { CheckboxText, SignInInfo } from '../../UI/molecules';

function SignIn() {
  const [check, setCheck] = useState(false);

  return (
    <ColumnContainer padding="15vh">
      <Logo marginBottom="3vh" />
      <SignInInfo />
      <Button
        border="1px solid #e9b3b3"
        background="none"
        marginBottom="26px"
        color="#e9b3b3"
        width="380px"
      >
        회원가입
      </Button>
      <CheckboxText
        width="380px"
        marginBottom="30px"
        text="로그인 유지하기"
        check={check}
        setCheck={setCheck}
      />
    </ColumnContainer>
  );
}

export default SignIn;
