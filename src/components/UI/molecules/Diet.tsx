import React from 'react';

import { RowContainer, Text, LLink } from '../atoms';

interface DietProps {
  meal: string;
  calorie: string;
}

function Diet({ meal, calorie }: DietProps) {
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
        {calorie}
      </Text>
      <LLink to="/afitch/mydiet/detail">자세히보기</LLink>
    </RowContainer>
  );
}

export default Diet;
