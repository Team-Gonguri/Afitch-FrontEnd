import React, { useEffect, useState } from 'react';

import { ColumnContainer, Iframe, Button, Text } from '../atoms';
import { VideoList } from '../molecules';
import { getExerciseDetail } from '../../../repo/exercise-controller';
import { getParticipants } from '../../../repo/exercise-participation-controller';
import useUser from '../../../hook/useUser';

interface FitnessVideoListProps {
  exerciseId: number;
}

function FitnessVideoList({ exerciseId }: FitnessVideoListProps) {
  const { user } = useUser();
  const [url, setUrl] = useState<string | undefined>();

  useEffect(() => {
    getExerciseDetail(user.accessToken, { exerciseId }).then((d) =>
      setUrl(d.data.expertURL),
    );
    getParticipants(user.accessToken, { exerciseId, order: 'LATEST' }).then(
      (d) => console.log(d.data),
    );
  }, []);

  return (
    <ColumnContainer width="96%" marginBottom="50px">
      <Iframe
        width="100%"
        height="67vh"
        src={url}
        title="video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        marginBottom="20px"
      ></Iframe>
      <Button marginBottom="20px" style={{ marginLeft: 'auto' }}>
        영상찍기
      </Button>
      {/* <Text marginRight="auto" marginBottom="20px" fontWeight="600">
        새로운 영상
      </Text>
      <VideoList /> */}
    </ColumnContainer>
  );
}

export default FitnessVideoList;
