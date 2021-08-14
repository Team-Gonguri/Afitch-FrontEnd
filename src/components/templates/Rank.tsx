import React, { useState, useEffect } from 'react';

import { ColumnContainer } from '../UI/atoms';
import { RankComboBox, UserFitnessList } from '../UI/organisms';

function Rank() {
  const [values, setValues] = useState();

  useEffect(() => {}, [values]);

  return (
    <ColumnContainer width="100%">
      <RankComboBox setValues={setValues} />
      <UserFitnessList fitness={[]} />
    </ColumnContainer>
  );
}

export default Rank;
