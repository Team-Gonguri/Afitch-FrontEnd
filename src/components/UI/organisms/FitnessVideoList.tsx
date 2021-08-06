import React from 'react';

import {
  ColumnContainer,
  RowContainer,
  Iframe,
  Button,
  Text,
  Video,
} from '../atoms';
import { VideoList } from '../molecules';

function FitnessVideoList() {
  return (
    <ColumnContainer width="96%" marginBottom="50px">
      <Iframe
        width="100%"
        height="67vh"
        src="https://www.youtube.com/embed/LBmB3DGxnNk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        marginBottom="20px"
      ></Iframe>
      <Button marginBottom="20px" style={{ marginLeft: 'auto' }}>
        영상찍기
      </Button>
      <Text marginRight="auto" marginBottom="20px" fontWeight="600">
        새로운 영상
      </Text>
      <VideoList />
    </ColumnContainer>
  );
}

export default FitnessVideoList;
