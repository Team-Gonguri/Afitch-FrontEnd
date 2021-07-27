import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { ColumnContainer, Button, Logo } from '../../UI/atoms';
import { SignInForm } from '../../UI/organisms';

function SignIn() {
  const history = useHistory();

  const onSignUpBtnClicked = () => {
    history.push('/signup');
  };

  return (
    <ColumnContainer padding="15vh">
      <Logo marginBottom="3vh" />
      <SignInForm />
      <Button
        border="1px solid #e9b3b3"
        background="none"
        marginBottom="26px"
        color="#e9b3b3"
        width="380px"
        onClick={onSignUpBtnClicked}
      >
        회원가입
      </Button>
    </ColumnContainer>
  );
}

export default SignIn;
