import React from 'react';

import { Text, LLink, FitnessLink, ColumnContainer } from '../atoms';

interface FitnessCardProps {
  name: string;
  score?: number;
  id?: number;
  url?: string;
  to?: string;
}

function FitnessCard({ name, score, id, to }: FitnessCardProps) {
  return (
    <FitnessLink width="24%" to={to ? to : `/afitch/fitnessvideo/${id}`}>
      <ColumnContainer
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Text
          fontSize="1.0em"
          style={{
            justifyContent: 'center',
          }}
        >
          {name}
        </Text>
        {score && (
          <Text
            fontSize="1.0em"
            style={{
              justifyContent: 'center',
            }}
          >
            점수: {score.toFixed(2)}
          </Text>
        )}
      </ColumnContainer>
    </FitnessLink>
  );
}

export default FitnessCard;
