import React, { useState, useEffect } from 'react';

import { RowContainer, RadioBtn, Text, Button } from '../atoms';

interface IndexSignature {
  [key: string]: boolean;
}

interface MealRadiosProps {
  init: IndexSignature;
  check: IndexSignature;
  setChecked: React.Dispatch<React.SetStateAction<IndexSignature>>;
}

function MealRadios({ init, check, setChecked }: MealRadiosProps) {
  useEffect(() => {
    console.log(check);
  }, [check]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const obj: IndexSignature = {};
    obj[e.target.value] = e.target.checked;
    setChecked({ ...init, ...obj });
  };

  return (
    <RowContainer width="auto">
      <RadioBtn
        marginRight="10px"
        name="meal"
        value="BREAKFAST"
        checked={check.BREAKFAST}
        onChange={onChange}
      />
      <Text width="auto" marginRight="20px">
        아침
      </Text>
      <RadioBtn
        marginRight="10px"
        name="meal"
        value="LUNCH"
        checked={check.LUNCH}
        onChange={onChange}
      />{' '}
      <Text width="auto" marginRight="20px">
        점심
      </Text>
      <RadioBtn
        marginRight="10px"
        name="meal"
        value="DINNER"
        checked={check.DINNER}
        onChange={onChange}
      />{' '}
      <Text width="auto" marginRight="20px">
        저녁
      </Text>
      <RadioBtn
        marginRight="10px"
        name="meal"
        value="SNACK"
        checked={check.SNACK}
        onChange={onChange}
      />{' '}
      <Text width="auto" marginRight="auto">
        간식
      </Text>
    </RowContainer>
  );
}

export default MealRadios;
