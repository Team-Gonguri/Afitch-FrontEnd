import React, { useState, useEffect } from 'react';

import { RowContainer } from '../atoms';
import { ComboBox } from '../molecules';

function RankComboBox() {
  const [category, setCategory] = useState('');
  const [fitness, setFitness] = useState('');
  const [order, setOrder] = useState('');

  const setValues = () => {
    const data = { category, fitness, order };
    console.log(data);
  };

  useEffect(setValues, [category, fitness, order]);

  const comboBoxes = [
    {
      label: '카테고리',
      comboName: 'category',
      options: [
        { value: 'back', text: '등' },
        { value: 'shoulder', text: '어깨' },
        { value: 'abdominal', text: '복부' },
        { value: 'lowerbody', text: '하체' },
      ],
      setData: setCategory,
    },
    {
      label: '운동',
      comboName: 'fitness',
      options: [
        { value: 'pushup1', text: '푸시업1' },
        { value: 'pushup2', text: '푸시업2' },
        { value: 'pushup3', text: '푸시업3' },
        { value: 'pushup4', text: '푸시업4' },
      ],
      setData: setFitness,
    },
    {
      label: '정렬',
      comboName: 'order',
      options: [
        { value: 'rank', text: '랭킹' },
        { value: 'new', text: '신규' },
      ],
      setData: setOrder,
    },
  ];

  return (
    <RowContainer width="100%" marginBottom="50px">
      {comboBoxes.map((v) => {
        return (
          <ComboBox
            key={v.label}
            label={v.label}
            comboName={v.comboName}
            options={v.options}
            setData={v.setData}
          />
        );
      })}
    </RowContainer>
  );
}

export default RankComboBox;
