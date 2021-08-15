import React, { useRef, useEffect, useState } from 'react';

import { ColumnContainer, RowContainer, Text } from '../atoms';
import { InputBoxButton, Reply } from '../molecules';
import { ExerciseCommentDto } from '../../../entity/repo/exercise-participation-controller';
import { createComment } from '../../../repo/exercise-comment-controller';
import useUser from '../../../hook/useUser';

interface ReplyWindowProps {
  comments: ExerciseCommentDto[];
  refresh: () => void;
  exerciseId: string;
  participantId: string;
}

function ReplyWindow({
  comments,
  refresh,
  exerciseId,
  participantId,
}: ReplyWindowProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { user } = useUser();
  const [reply, setReply] = useState(comments);

  const onClick = () => {
    if (inputRef.current && inputRef.current.value) {
      createComment(
        user.accessToken,
        {
          participationId: parseInt(participantId),
          exerciseId: parseInt(exerciseId),
        },
        { text: inputRef.current.value },
      ).then(refresh);
    }
  };

  return (
    <ColumnContainer width="100%" padding="0 20px">
      <Text
        width="100%"
        fontWeight="bold"
        fontSize="24px"
        color="#E9B3B3"
        style={{}}
      >
        댓글
      </Text>
      <InputBoxButton
        btnText="입력"
        iRef={inputRef}
        iWidth="75%"
        bWidth="20%"
        onClick={onClick}
        marginBottom="50px"
      />
      <ColumnContainer
        width="100%"
        marginBottom="50px"
        style={{
          background: 'white',
          border: '1px solid #E9B3B3',
          padding: '10px',
        }}
      >
        <RowContainer
          width="100%"
          marginBottom="15px"
          style={{ borderRadius: '10px' }}
        >
          <Text fontWeight="bold" color="#E9B3B3" width="15%">
            닉네임
          </Text>
          <Text fontWeight="bold" color="#E9B3B3" width="85%">
            내용
          </Text>
        </RowContainer>
        {comments.map((v, i) => {
          return <Reply key={i} id={v.nickName} contents={v.text} />;
        })}
        {comments.length === 0 && <Text>댓글이 없습니다.</Text>}
      </ColumnContainer>
    </ColumnContainer>
  );
}

export default ReplyWindow;
