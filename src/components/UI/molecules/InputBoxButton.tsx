import React, { useState } from 'react';

import { ColumnContainer, RowContainer, Text, Input, Button } from '../atoms';
import { InputBoxButtonProps } from '../../../entity/components/molecules';

function InputBoxButton({
  text,
  width,
  iRef,
  type,
  marginBottom,
  btnText,
  iWidth,
  bWidth,
  onClick,
}: InputBoxButtonProps) {
  const [iText, setIText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIText(e.target.value);
  };
  return (
    <ColumnContainer width={width ? width : '100%'}>
      <Text height="30px" width="100%">
        {text}
      </Text>
      <RowContainer
        width="100%"
        marginBottom={marginBottom ? marginBottom : undefined}
        style={{ justifyContent: 'space-between' }}
      >
        <Input
          width={iWidth ? iWidth : '60%'}
          type={type}
          ref={iRef}
          value={iText}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <Button
          width={bWidth ? bWidth : '30%'}
          onClick={() => {
            onClick && onClick();
            setIText('');
          }}
        >
          {btnText}
        </Button>
      </RowContainer>
    </ColumnContainer>
  );
}

export default InputBoxButton;
