import React, { useEffect } from 'react';

import { RowContainer, Text, LLink } from '../atoms';
import { SimpleMealDto } from '../../../entity/repo/diet-controller';

interface DietProps {
  meal: string;
  info: SimpleMealDto | undefined;
}

function Diet({ meal, info }: DietProps) {
  useEffect(() => {
    console.log(info);
  }, [info]);
  return (
    <RowContainer
      width="100%"
      marginBottom="20px"
      style={{ justifyContent: 'space-between' }}
    >
      <Text width="15%" fontSize="18px" fontWeight="300">
        {meal}
      </Text>

      <Text width="15%" fontSize="18px" fontWeight="300">
        {info ? info.ingredient.calories : '0'} kcal
      </Text>
      <Text width="15%" fontSize="18px" fontWeight="300">
        {info ? info.ingredient.carbohydrate : '0'} g
      </Text>
      <Text width="15%" fontSize="18px" fontWeight="300">
        {info ? info.ingredient.fat : '0'} g
      </Text>
      <Text width="15%" fontSize="18px" fontWeight="300">
        {info ? info.ingredient.protein : '0'} g
      </Text>
      <LLink
        to={{
          pathname: '/afitch/mydiet/detail',
          state: {
            info,
          },
        }}
        fontSize="15px"
      >
        자세히보기
      </LLink>
    </RowContainer>
  );
}

export default Diet;
