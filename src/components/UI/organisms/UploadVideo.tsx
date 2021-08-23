import React, { useState, useEffect } from 'react';

import { Input, RowContainer, Button } from '../atoms';
import { createUserVideo } from '../../../repo/exercise-participation-controller';
import useUser from '../../../hook/useUser';

interface UploadVideoProps {
  exerciseId: number;
}

function UploadVideo({ exerciseId }: UploadVideoProps) {
  const [video, setVideo] = useState<File>();
  const { user } = useUser();

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setVideo(e.target.files[0]);
  };

  const onUpLoadBtnClicked = () => {
    if (!video) {
      alert('파일이 없습니다.');
      return;
    }
    createUserVideo(user.accessToken, {
      exerciseId,
      video,
      open: 'PUBLIC',
    }).then((d) => console.log(d.data));
  };

  return (
    <RowContainer width="100%" style={{ justifyContent: 'flex-end' }}>
      <Input
        width="auto"
        type="file"
        onChange={handleChangeFile}
        style={{ border: 'none', lineHeight: '40px' }}
      />
      <Button onClick={onUpLoadBtnClicked}>업로드</Button>
    </RowContainer>
  );
}

export default UploadVideo;
