import React from 'react';
import { useHistory } from 'react-router-dom';

import { ColumnContainer, Logo } from '../../UI/atoms';
import { SignUpForm } from '../../UI/organisms';

function SignUp() {
  const history = useHistory();

  const onLogoClicked = () => {
    history.push('/');
  };

  return (
    <ColumnContainer padding="15vh">
      <Logo onClick={onLogoClicked} />
      <SignUpForm />
    </ColumnContainer>
  );
}

export default SignUp;
