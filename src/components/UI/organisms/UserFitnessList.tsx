import React from 'react';

import { RowContainer } from '../atoms';
import { FitnessCard } from '../molecules';
import { UserFitness } from '../../../entity/components/organisms';

function UserFitnessList({ fitness }: UserFitness) {
  return (
    <RowContainer width="100%">
      {fitness.map((v) => {
        return (
          <FitnessCard
            key={v.text}
            text={v.text}
            url={v.url}
            to={`/afitch/comment/${v.text}`}
          />
        );
      })}
    </RowContainer>
  );
}

export default UserFitnessList;
