import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Logo from '../../../../../assets/Logo.png';
import { CategoryType } from '../../../../../entity/repo/default';
import useUser from '../../../../../hook/useUser';
import { CardList } from '../../../../UI/organisms';
import { getExercises } from '../../.././../../repo/exercise-controller';
import { SimpleExerciseDto } from '../../../../../entity/repo/exercise-controller';

interface MatchParams {
  fitness: CategoryType;
}

function FitnessList({ match }: RouteComponentProps<any>) {
  const { user } = useUser();
  const [category, setCategory] = useState<CategoryType>(match.params.fitness);
  const [list, setList] = useState<SimpleExerciseDto[]>([]);

  useEffect(() => {
    console.log(category);
    if (category) {
      getExercises(user.accessToken, { category }).then((d) =>
        setList(d.data.exercises),
      );
    }
  }, [category]);

  return (
    <React.Fragment>
      <CardList list={list} />
    </React.Fragment>
  );
}

export default FitnessList;
