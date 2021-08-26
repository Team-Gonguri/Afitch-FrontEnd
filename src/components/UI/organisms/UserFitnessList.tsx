import React from 'react';

import { RowContainer } from '../atoms';
import { FitnessCard } from '../molecules';
import { SimpleExerciseParticipationDto } from '../../../entity/repo/exercise-participation-controller';

interface UserFitnessListProps {
  fitnessList: SimpleExerciseParticipationDto[];
}

function UserFitnessList({ fitnessList }: UserFitnessListProps) {
  return (
    <RowContainer width="100%">
      {fitnessList &&
        fitnessList.map((v: SimpleExerciseParticipationDto) => {
          if (v.scope === 'PUBLIC') {
            return (
              <FitnessCard
                key={v.userName + v.score}
                name={`닉네임: ${v.userName}`}
                score={v.score}
                to={`/afitch/comment/${v.exerciseId}/${v.participationId}`}
              />
            );
          } else {
            return;
          }
        })}
    </RowContainer>
  );
}

export default UserFitnessList;
