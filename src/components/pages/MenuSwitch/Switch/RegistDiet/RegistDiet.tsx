/* eslint-disable prettier/prettier */
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ColumnContainer } from '../../../../UI/atoms';
import { ComboBox } from '../../../../UI/molecules';
import { FoodSearch } from '../../../../UI/organisms';

interface LocationState {
  date: string;
}

function RegistDiet({
  location: {
    state: { date },
  },
}: RouteComponentProps<{}, {}, LocationState>) {
  return (
    <ColumnContainer width="100%">
      <FoodSearch date={date} />
    </ColumnContainer>
  );
}

export default RegistDiet;
