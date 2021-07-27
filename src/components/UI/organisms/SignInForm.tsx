import React, { useState } from 'react';

import { ColumnContainer, Input, Button } from '../atoms';
import { CheckboxText } from '../../UI/molecules';

function SignInForm() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [check, setCheck] = useState(false);

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
        marginBottom="5px"
        placeholder="p/w"
        type="password"
        value={pw}
        onChange={(e) => {
          inputChange(e, setPw);
        }}
      />
      <CheckboxText
        width="380px"
        marginBottom="20px"
        text="로그인 유지하기"
        check={check}
        setCheck={setCheck}
      />
      <Button marginBottom="12px" width="380px">
        로그인
      </Button>
    </ColumnContainer>
  );
}

export default SignInForm;
