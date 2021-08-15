import React, { useState, useEffect } from 'react';

import { RowContainer } from '../atoms';
import { ComboBox } from '../molecules';
import useUser from '../../../hook/useUser';
import { getCategories, getExercises } from '../../../repo/exercise-controller';

interface ValuesEntity {
  category: string;
  fitness: string;
  order: string;
}

interface RankComboBoxProps {
  setValues: React.Dispatch<React.SetStateAction<ValuesEntity>>;
}

interface Option {
  value: string | number;
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
    const data: ValuesEntity = { category, fitness, order };
    if (category && fitness && order) {
      setValues(data);
    }
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
      setFitness('');
      getExercises(user.accessToken, { category }).then((d) => {
        const temp = d.data.exercises.map((v) => {
          return { value: v.id, text: v.name };
        });
        setExercises([...temp]);
      });
    } else {
      setExercises([]);
    }
  }, [category]);

  const comboBoxes = [
    {
      label: '카테고리',
      comboName: 'category',
      options: categories,
      data: category,
      setData: setCategory,
    },
    {
      label: '운동',
      comboName: 'fitness',
      options: exercises,
      data: fitness,
      setData: setFitness,
    },
    {
      label: '정렬',
      comboName: 'order',
      options: [
        { value: 'RANKING', text: '랭킹' },
        { value: 'LATEST', text: '신규' },
      ],
      data: order,
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
            data={v.data}
            setData={v.setData}
          />
        );
      })}
    </RowContainer>
  );
}

export default RankComboBox;
