import React from 'react';

import { RowContainer } from '../atoms';
import { FitnessCard } from '../molecules';
import { UserFitness } from '../../../entity/components/organisms';

function UserFitnessList({ fitness }: UserFitness) {
  return (
    <RowContainer width="100%">
      {fitness &&
        fitness.map((v) => {
          return (
            <FitnessCard
              key={v.name}
              id={v.id}
              name={v.name}
              url={v.url}
              to={`/afitch/comment/${v.name}`}
            />
          );
        })}
    </RowContainer>
  );
}

export default UserFitnessList;
