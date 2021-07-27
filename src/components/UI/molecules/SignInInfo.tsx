import React, { useState } from 'react';

import { ColumnContainer, Input, Button } from '../atoms';

function SignInInfo() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const inputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    set: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    set(e.target.value);
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
      <Button marginBottom="12px" width="380px">
        로그인
      </Button>
    </ColumnContainer>
  );
}

export default SignInInfo;
