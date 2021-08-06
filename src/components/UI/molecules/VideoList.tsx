import React from 'react';

import { RowContainer, Video, Iframe, Img, ColumnContainer } from '../atoms';

function VideoList() {
  const dummy = [
    { src: 'https://img.youtube.com/vi/LBmB3DGxnNk/mqdefault.jpg' },
    { src: 'https://img.youtube.com/vi/LBmB3DGxnNk/mqdefault.jpg' },
    { src: 'https://img.youtube.com/vi/LBmB3DGxnNk/mqdefault.jpg' },
    { src: 'https://img.youtube.com/vi/LBmB3DGxnNk/mqdefault.jpg' },
    { src: 'https://img.youtube.com/vi/LBmB3DGxnNk/mqdefault.jpg' },
    { src: 'https://img.youtube.com/vi/LBmB3DGxnNk/mqdefault.jpg' },
    { src: 'https://img.youtube.com/vi/LBmB3DGxnNk/mqdefault.jpg' },
  ];

  return (
    <RowContainer width="100%" style={{ overflow: 'scroll' }}>
      <RowContainer style={{ flexWrap: 'nowrap' }}>
        {dummy.map((v, i) => {
          return (
            <Img
              key={i}
              width="calc(60vw / 4)"
              height="calc(60vw / 4 / 16 * 9)"
              marginRight="40px"
              url={v.src}
            />
          );
        })}
      </RowContainer>
    </RowContainer>
  );
}

export default VideoList;
