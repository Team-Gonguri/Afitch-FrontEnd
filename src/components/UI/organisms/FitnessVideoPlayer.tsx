import React, { useEffect, useState } from 'react';

import { ColumnContainer, Iframe, Button, Text, Video } from '../atoms';
import { VideoList } from '../molecules';
import { getExerciseDetail } from '../../../repo/exercise-controller';
import { getParticipants } from '../../../repo/exercise-participation-controller';
import useUser from '../../../hook/useUser';

interface FitnessVideoListProps {
  width: string;
  exerciseId: number;
}

function FitnessVideoPlayer({ width, exerciseId }: FitnessVideoListProps) {
  const { user } = useUser();
  const [url, setUrl] = useState<string | undefined>();

  useEffect(() => {
    getExerciseDetail(user.accessToken, { exerciseId }).then((d) => {
      setUrl(d.data.expertURL);
      console.log(d.data);
    });
    getParticipants(user.accessToken, { exerciseId, order: 'LATEST' }).then(
      (d) => console.log(d.data),
    );
  }, []);

  return (
    <ColumnContainer width={width} marginBottom="0px">
      <Iframe
        width="100%"
        height="67vh"
        src={url}
        title="video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        marginBottom="20px"
      ></Iframe>
      {/* <Text marginRight="auto" marginBottom="20px" fontWeight="600">
        새로운 영상
      </Text>
      <VideoList /> */}
    </ColumnContainer>
  );
}

export default FitnessVideoPlayer;
