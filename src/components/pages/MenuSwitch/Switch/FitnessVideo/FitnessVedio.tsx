import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { FitnessVideoList } from '../../../../UI/organisms';

interface MatchParams {
  fitness: string;
}

function FitnessVideo({ match }: RouteComponentProps<MatchParams>) {
  console.log(match);
  return (
    <>
      <FitnessVideoList />
    </>
  );
}

export default FitnessVideo;
