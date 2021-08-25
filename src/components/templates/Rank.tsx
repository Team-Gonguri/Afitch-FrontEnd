import React, { useState, useEffect } from 'react';

import { ColumnContainer } from '../UI/atoms';
import { RankComboBox, UserFitnessList } from '../UI/organisms';
import { getParticipants } from '../../repo/exercise-participation-controller';
import { SimpleExerciseParticipationDto } from '../../entity/repo/exercise-participation-controller';
import useUser from '../../hook/useUser';

interface ValuesEntity {
  category: string;
  fitness: string;
  order: string;
}

interface List {
  id: number;
  name: string;
}

function Rank() {
  const { user } = useUser();

  const [values, setValues] = useState<ValuesEntity>({
    category: '',
    fitness: '',
    order: '',
  });

  const [list, setList] = useState<SimpleExerciseParticipationDto[]>([]);

  useEffect(() => {
    if (
      (values.fitness && values.order === 'LATEST') ||
      values.order === 'RANKING'
    ) {
      setList([]);
      getParticipants(user.accessToken, {
        exerciseId: parseInt(values.fitness),
        order: values.order,
      }).then((d) => {
        console.log(d.data);
        setList(d.data.lists);
      });
    }
  }, [values]);

  return (
    <ColumnContainer width="100%">
      <RankComboBox setValues={setValues} />
      <UserFitnessList fitnessList={list} />
    </ColumnContainer>
  );
}

export default Rank;
