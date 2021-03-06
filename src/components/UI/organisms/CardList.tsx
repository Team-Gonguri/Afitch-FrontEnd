import React from 'react';

import { RowContainer } from '../atoms';
import { FitnessCard } from '../molecules';
import { SimpleExerciseDto } from '../../../entity/repo/exercise-controller';

interface Card {
  name: string;
  id: number;
}

interface Cards {
  list: SimpleExerciseDto[];
}

function CardList({ list }: Cards) {
  return (
    <RowContainer width="100%" padding="20px 0 0 0">
      {list &&
        list.map((v, i) => {
          return <FitnessCard key={i} name={v.name} id={v.id} />;
        })}
    </RowContainer>
  );
}

export default CardList;
