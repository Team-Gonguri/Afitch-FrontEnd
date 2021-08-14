import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { FitnessVideoList } from '../../../../UI/organisms';
import { getExerciseDetail } from '../../../../../repo/exercise-controller';
import useUser from '../../../../../hook/useUser';

interface MatchParams {
  id: string;
}

function FitnessVideo({ match }: RouteComponentProps<any>) {
  const { user } = useUser();
  const [id, setId] = useState<number>(match.params.id);

  useEffect(() => {}, []);

  return (
    <>
      <FitnessVideoList exerciseId={id} />
    </>
  );
}

export default FitnessVideo;
