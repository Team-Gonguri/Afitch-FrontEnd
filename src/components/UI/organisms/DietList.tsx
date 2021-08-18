import React, { useEffect, useState } from 'react';

import { ColumnContainer, RowContainer, LLink, Text } from '../atoms';
import { Diet } from '../molecules';
import useUser from '../../../hook/useUser';
import { getDailyDiet } from '../../../repo/diet-controller';
import {
  GetDailyDietRes,
  SimpleMealDto,
} from '../../../entity/repo/diet-controller';

interface DietListProps {
  curDate: string;
}

function DietList({ curDate }: DietListProps) {
  const { user } = useUser();
  const [meal, setMeal] = useState<GetDailyDietRes>();

  useEffect(() => {
    if (curDate) {
      getDailyDiet(user.accessToken, { date: curDate }).then((d) => {
        setMeal(d.data);
      });
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
      <RowContainer
        width="100%"
        padding="0 0 10px 0"
        style={{ borderBottom: '1px solid #e9b3b3', marginBottom: '20px' }}
      >
        <Text width="15%" fontSize="20px" fontWeight="400">
          식사
        </Text>
        <Text width="15%" fontSize="20px" fontWeight="400">
          칼로리
        </Text>
        <Text width="15%" fontSize="20px" fontWeight="400">
          탄수화물
        </Text>
        <Text width="15%" fontSize="20px" fontWeight="400">
          단백질
        </Text>
        <Text width="15%" fontSize="20px" fontWeight="400">
          지방
        </Text>
      </RowContainer>
      <Diet meal="아침" info={meal?.diet.BREAKFAST} />
      <Diet meal="점심" info={meal?.diet.LUNCH} />
      <Diet meal="저녁" info={meal?.diet.DINNER} />
      <Diet meal="간식" info={meal?.diet.SNACK} />
      <LLink
        to={{
          pathname: '/afitch/mydiet/regist',
          state: {
            date: curDate,
          },
        }}
        style={{ marginBottom: '20px' }}
        fontSize="24px"
      >
        +
      </LLink>
    </ColumnContainer>
  );
}

export default DietList;
