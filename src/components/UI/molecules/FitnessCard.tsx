import React from 'react';

import { Text, LLink, Video } from '../atoms';

interface FitnessCardProps {
  name: string;
  id: number;
  url?: string;
  to?: string;
}

function FitnessCard({ name, id, to }: FitnessCardProps) {
  return (
    <LLink
      width="calc(100% / 7)"
      to={to ? to : `/afitch/fitnessvideo/${id}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '15px',
        paddingBottom: 'calc(100% / 7 * 0.85)',
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
      {/* <Video
        src={url}
        muted
        style={{
          position: 'absolute',
          top: '0%',
          width: '95%',
          height: '60%',
        }}
      /> */}
      <Text
        fontSize="0.8em"
        style={{
          justifyContent: 'center',
          position: 'absolute',
          bottom: '13%',
        }}
      >
        {name}
      </Text>
    </LLink>
  );
}

export default FitnessCard;
