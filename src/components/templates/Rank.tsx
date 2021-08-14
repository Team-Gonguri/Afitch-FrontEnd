import React from 'react';

import { ColumnContainer } from '../UI/atoms';
import { RankComboBox, UserFitnessList } from '../UI/organisms';

function Rank() {
  return (
    <ColumnContainer width="100%">
      <RankComboBox />
      <UserFitnessList fitness={[]} />
    </ColumnContainer>
  );
}

export default Rank;
