import React from 'react';

import { ColumnContainer, RowContainer, Video } from '../atoms';

function FitnessVideoList() {
  return (
    <ColumnContainer width="100%">
      <iframe
        width="1440"
        height="600"
        src="https://www.youtube.com/embed/LBmB3DGxnNk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </ColumnContainer>
  );
}

export default FitnessVideoList;
