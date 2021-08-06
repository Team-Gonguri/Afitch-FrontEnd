import React from 'react';

import { ColumnContainer, Img, Text, LLink } from '../atoms';

interface FitnessCardProps {
  url: string;
  text: string;
}

function FitnessCard({ url, text }: FitnessCardProps) {
  return (
    <LLink
      width="calc(100% / 5)"
      to={`/afitch/fitnessvideo/${text}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '15px',
        paddingBottom: 'calc(100% / 5 * 1.2)',
        background: 'white',
        border: '1px solid #e9b3b3',
        margin: `20px calc(100%/5/8)`,
        cursor: 'pointer',
        position: 'relative',
        fontSize: 'calc(80vw/5/12)',
        maxWidth: '320px',
        maxHeight: '384px',
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
    </LLink>
  );
}

export default FitnessCard;
