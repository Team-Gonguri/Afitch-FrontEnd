import React from 'react';

import { ColumnContainer, Logo } from '../../UI/atoms';
import { SignUpForm } from '../../UI/organisms';

function SignUp() {
  return (
    <ColumnContainer padding="15vh">
      <Logo />
      <SignUpForm />
    </ColumnContainer>
  );
}

export default SignUp;
