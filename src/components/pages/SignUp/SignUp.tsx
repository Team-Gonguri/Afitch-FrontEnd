import React from 'react';
import { useHistory } from 'react-router';

import { ColumnContainer, Logo } from '../../UI/atoms';
import { SignUpForm } from '../../UI/organisms';

function SignUp() {
  const history = useHistory();

  const LogoClicked = () => {
    history.replace('/');
  };

  return (
    <ColumnContainer padding="15vh">
      <Logo onClick={LogoClicked} />
      <SignUpForm />
    </ColumnContainer>
  );
}

export default SignUp;
