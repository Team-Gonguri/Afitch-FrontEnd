import React from 'react';

import { ColumnContainer, Img, Text } from '../atoms';

interface FitnessCardProps {
  url: string;
  text: string;
}

function FitnessCard({ url, text }: FitnessCardProps) {
  return (
    <ColumnContainer
      width="calc(80vw/5)"
      height="calc(80vw/5*1.2)"
      style={{
        paddingTop: '15px',
        background: 'white',
        border: '1px solid #e9b3b3',
        margin: '20px 10px',
        cursor: 'pointer',
        position: 'relative',
        fontSize: 'calc(80vw/5/12)',
      }}
    >
      <Img
        width="80%"
        height="40%"
        url={url}
        style={{ position: 'absolute', top: '10%' }}
      />
      <Text
        fontSize="1em"
        style={{
          justifyContent: 'center',
          position: 'absolute',
          bottom: '18%',
        }}
      >
        {text}
      </Text>
    </ColumnContainer>
  );
}

export default FitnessCard;
