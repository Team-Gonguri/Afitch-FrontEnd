import React, { useEffect } from 'react';

import { RowContainer, Text } from '../atoms';

interface Option {
  value: string | number;
  text: string;
}

interface ComboBoxProps {
  label: string;
  comboName: string;
  options: Option[];
  data: string;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

function ComboBox({ label, comboName, options, data, setData }: ComboBoxProps) {
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
        value={data}
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
