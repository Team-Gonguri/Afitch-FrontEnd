import React from 'react';

import { RowContainer, Text } from '../atoms';

interface Option {
  value: string;
  text: string;
}

interface ComboBoxProps {
  label: string;
  comboName: string;
  options: Option[];
  setData: React.Dispatch<React.SetStateAction<string>>;
}

function ComboBox({ label, comboName, options, setData }: ComboBoxProps) {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData(e.target.value);
  };

  return (
    <RowContainer marginRight="20px">
      <Text width="auto" marginRight="20px">
        {label}
      </Text>
      <select
        name={comboName}
        onChange={(e) => {
          onChange(e);
        }}
      >
        <option value="">--------</option>
        {options.map((v, i) => {
          return (
            <option key={i} value={v.value}>
              {v.text}
            </option>
          );
        })}
      </select>
    </RowContainer>
  );
}

export default ComboBox;
