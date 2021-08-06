import React from 'react';

import { ColumnContainer } from '../UI/atoms';
import { RankComboBox, RankList } from '../UI/organisms';

function Rank() {
  return (
    <ColumnContainer width="100%">
      <RankComboBox />
      <RankList />
    </ColumnContainer>
  );
}

export default Rank;
