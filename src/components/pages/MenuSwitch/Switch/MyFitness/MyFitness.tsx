import React from 'react';

import { ColumnContainer, Text } from '../../../../UI/atoms';
import { UserFitnessList } from '../../../../UI/organisms';

function MyFitness() {
  return (
    <ColumnContainer width="100%">
      <Text
        fontSize="2rem"
        fontWeight="bold"
        color="#E9B3B3"
        width="100%"
        marginBottom="50px"
      >
        내 운동
      </Text>
      <UserFitnessList fitness={[]} />
    </ColumnContainer>
  );
}

export default MyFitness;
