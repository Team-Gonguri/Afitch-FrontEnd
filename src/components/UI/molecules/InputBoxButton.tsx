import React, { useState } from 'react';

import { ColumnContainer, RowContainer, Text, Input, Button } from '../atoms';
import { InputBoxButtonProps } from '../../../entity/components/molecules';

function InputBoxButton({
  text,
  iRef,
  type,
  marginBottom,
  btnText,
}: InputBoxButtonProps) {
  const [iText, setIText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIText(e.target.value);
  };
  return (
    <ColumnContainer width="100%">
      <Text height="30px" width="100%">
        {text}
      </Text>
      <RowContainer
        width="100%"
        marginBottom={marginBottom ? marginBottom : undefined}
        style={{ justifyContent: 'space-between' }}
      >
        <Input
          width="60%"
          type={type}
          ref={iRef}
          value={iText}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <Button width="30%">{btnText}</Button>
      </RowContainer>
    </ColumnContainer>
  );
}

export default InputBoxButton;
