import React, { useEffect, useState } from 'react';

import { ColumnContainer, LLink } from '../atoms';
import { Diet } from '../molecules';
import useUser from '../../../hook/useUser';
import { getDailyDiet } from '../../../repo/diet-controller';
import { Ingredient } from '../../../entity/repo/default';
import { GetDailyDietRes } from '../../../entity/repo/diet-controller';

interface DietListProps {
  curDate: string;
}

function DietList({ curDate }: DietListProps) {
  const { user } = useUser();
  const [meal, setMeal] = useState<GetDailyDietRes>();

  useEffect(() => {
    if (curDate) {
      getDailyDiet(user.accessToken, { date: curDate }).then((d) =>
        setMeal(d.data),
      );
    }
  }, [curDate]);

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
      <Diet meal="아침" info={meal?.BREAKFAST} />
      <Diet meal="점심" info={meal?.LUNCH} />
      <Diet meal="저녁" info={meal?.DINNER} />
      <Diet meal="간식" info={meal?.SNACK} />
      <LLink
        to={{
          pathname: '/afitch/mydiet/regist',
          state: {
            date: curDate,
          },
        }}
        marginBottom="20px"
        fontSize="24px"
      >
        +
      </LLink>
    </ColumnContainer>
  );
}

export default DietList;
