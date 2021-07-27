import React, { useState } from 'react';

import { ColumnContainer, Text, Input } from '../atoms';
import { InputBoxProps } from '../../../entity/components/molecules';

function InputBox({
  text,
  iRef,
  type,
  marginBottom,
  iWidth,
  iHeight,
}: InputBoxProps) {
  const [iText, setIText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIText(e.target.value);
  };

  return (
    <ColumnContainer padding="0">
      <Text height="30px" width="100%">
        {text}
      </Text>
      <Input
        width={iWidth ? iWidth : undefined}
        height={iHeight ? iHeight : undefined}
        marginBottom={marginBottom ? marginBottom : undefined}
        type={type}
        ref={iRef}
        value={iText}
        onChange={(e) => {
          onChange(e);
        }}
      />
    </ColumnContainer>
  );
}

export default InputBox;
