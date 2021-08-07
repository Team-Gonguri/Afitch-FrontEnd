import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ColumnContainer, Video, Iframe } from '../../../../UI/atoms';
import { ReplyWindow } from '../../../../UI/organisms';

interface MatchParams {
  id: string;
}

function Comment({ match }: RouteComponentProps<MatchParams>) {
  useEffect(() => {
    console.log(match.params.id);
  }, []);

  return (
    <ColumnContainer>
      <Video
        width="100%"
        height="45vh"
        marginBottom="50px"
        controls
        style={{ background: 'black' }}
        src="http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b.mp4"
      />
      <ReplyWindow />
    </ColumnContainer>
  );
}

export default Comment;
