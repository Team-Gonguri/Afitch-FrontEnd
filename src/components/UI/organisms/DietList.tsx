import React from 'react';

import { ColumnContainer } from '../atoms';
import { Diet } from '../molecules';

function DietList() {
  const diet = [
    { meal: '아침', calorie: '1200kcal' },
    { meal: '점심', calorie: '1000kcal' },
    { meal: '저녁', calorie: '700kcal' },
    { meal: '간식', calorie: '300kcal' },
  ];

  return (
    <ColumnContainer
      width="80%"
      padding="20px 20px 0px 20px"
      style={{
        borderRadius: '10px',
        border: '1px solid #E9B3B3',
        background: 'white',
      }}
    >
      {diet.map((v) => {
        return <Diet key={v.meal} meal={v.meal} calorie={v.calorie} />;
      })}
    </ColumnContainer>
  );
}

export default DietList;
