import React from 'react';

import { RowContainer, Text, LLink } from '../atoms';
import { SimpleMealDto } from '../../../entity/repo/diet-controller';

interface DietProps {
  meal: string;
  info: SimpleMealDto | undefined;
}

function Diet({ meal, info }: DietProps) {
  return (
    <RowContainer
      width="100%"
      marginBottom="20px"
      style={{ justifyContent: 'space-between' }}
    >
      <Text fontSize="18px" fontWeight="300">
        {meal}
      </Text>

      <Text fontSize="18px" fontWeight="300">
        {info ? info.ingredient.calories : '0'} kcal
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
