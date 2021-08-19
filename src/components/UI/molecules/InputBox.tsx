import React, { useEffect, useState } from 'react';

import { ColumnContainer, Text, Input } from '../atoms';
import { InputBoxProps } from '../../../entity/components/molecules';

function InputBox({
  text,
  iRef,
  type,
  marginBottom,
  marginRight,
  iWidth,
  iHeight,
  disable,
  dValue,
  onlyNumber,
}: InputBoxProps) {
  const [iText, setIText] = useState('');

  useEffect(() => {
    if (dValue) {
      setIText(dValue);
    }
  }, [dValue]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIText(e.target.value);
  };

  const onlyNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = e.target.value.replace(/[^.0-9]/g, '');
    setIText(temp);
  };

  return (
    <ColumnContainer
      padding="0"
      marginBottom={marginBottom ? marginBottom : undefined}
      marginRight={marginRight ? marginRight : undefined}
    >
      {text && (
        <Text height="30px" width="100%">
          {text}
        </Text>
      )}
      <Input
        width={iWidth ? iWidth : undefined}
        height={iHeight ? iHeight : undefined}
        type={type}
        ref={iRef}
        value={iText}
        onChange={(e) => {
          if (onlyNumber) {
            onlyNumberChange(e);
          } else {
            onChange(e);
          }
        }}
        disabled={disable}
      />
    </ColumnContainer>
  );
}

export default InputBox;
