import React, { useState, useEffect } from 'react';

import { RowContainer } from '../atoms';
import { ComboBox } from '../molecules';
import useUser from '../../../hook/useUser';
import { getCategories } from '../../../repo/exercise-controller';
import { CategoryType } from '../../../entity/repo/default';

interface RankComboBoxProps {
  setValues: any;
}

interface Option {
  value: string;
  text: string;
}

function RankComboBox({ setValues }: RankComboBoxProps) {
  const { user } = useUser();

  const [categories, setCategories] = useState<Option[]>([]);
  const [exercises, setExercises] = useState<Option[]>([]);

  const [category, setCategory] = useState('');
  const [fitness, setFitness] = useState('');
  const [order, setOrder] = useState('');

  const setCombo = () => {
    const data = { category, fitness, order };
    setValues(data);
  };

  useEffect(setCombo, [category, fitness, order]);

  useEffect(() => {
    getCategories(user.accessToken).then((d) => {
      const temp = d.data.categories.map((v) => {
        return { value: v, text: v };
      });
      setCategories([...temp]);
    });
  }, []);

  useEffect(() => {
    if (category) {
      console.log(exercises);
    } else {
      setExercises([]);
    }
  }, [category]);

  const comboBoxes = [
    {
      label: '카테고리',
      comboName: 'category',
      options: categories,
      setData: setCategory,
    },
    {
      label: '운동',
      comboName: 'fitness',
      options: exercises,
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
