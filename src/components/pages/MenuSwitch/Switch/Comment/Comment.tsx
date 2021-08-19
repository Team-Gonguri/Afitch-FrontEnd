import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ColumnContainer, Video, Iframe } from '../../../../UI/atoms';
import { ReplyWindow } from '../../../../UI/organisms';
import { getParticipantDetail } from '../../../../../repo/exercise-participation-controller';
import { ExerciseCommentDto } from '../../../../../entity/repo/exercise-participation-controller';
import useUser from '../../../../../hook/useUser';

interface MatchParams {
  exerciseId: string;
  userId: string;
}

function Comment({ match }: RouteComponentProps<MatchParams>) {
  const { user } = useUser();
  const [url, setUrl] = useState<string | undefined>();
  const [comments, setComments] = useState<ExerciseCommentDto[]>([]);

  const getInfo = () => {
    getParticipantDetail(user.accessToken, {
      exerciseId: parseInt(match.params.exerciseId),
      participationId: parseInt(match.params.userId),
      authorities: 'ROLE_USER',
      id: 1,
    }).then((d) => {
      console.log(d.data);
      setUrl(d.data.url);
      setComments(d.data.comments);
    });
  };

  useEffect(getInfo, []);

  return (
    <ColumnContainer width="100%">
      <Video
        width="100%"
        height="vh"
        marginBottom="50px"
        controls
        style={{ background: 'black' }}
        src={url}
      />
      <ReplyWindow
        comments={comments}
        refresh={getInfo}
        exerciseId={match.params.exerciseId}
        participantId={match.params.userId}
      />
    </ColumnContainer>
  );
}

export default Comment;
