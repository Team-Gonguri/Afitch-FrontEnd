/* eslint-disable prettier/prettier */
import React from 'react';

import { RowContainer, Checkbox, Text } from '../atoms';

type CTProps = {
  text: string;
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  width?: string;
  padding?: string;
  marginBottom?: string;
};

function CheckboxText({
  text,
  check,
  setCheck,
  width,
  padding,
  marginBottom,
}: CTProps) {
  const onChange = () => {
    setCheck(!check);
  };

  const textColor = () => {
    return check ? undefined : 'rgba(0, 0, 0, 0.5)';
  };

  return (
    <RowContainer
      marginBottom={marginBottom ? marginBottom : '0px'}
      width={width ? width : 'auto'}
      padding={padding ? padding : '0px'}
    >
      <Checkbox marginRight="10px" checked={check} onChange={onChange} />
      <Text color={textColor()}>{text}</Text>
    </RowContainer>
  );
}

export default CheckboxText;
