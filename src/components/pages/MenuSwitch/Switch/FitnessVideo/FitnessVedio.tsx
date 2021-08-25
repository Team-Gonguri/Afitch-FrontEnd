import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ColumnContainer, RowContainer, Button } from '../../../../UI/atoms';
import {
  FitnessVideoPlayer,
  WebCamPlayer,
  UploadVideo,
} from '../../../../UI/organisms';
import { getExerciseDetail } from '../../../../../repo/exercise-controller';
import useUser from '../../../../../hook/useUser';

interface MatchParams {
  id: string;
}

function FitnessVideo({ match }: RouteComponentProps<any>) {
  const { user } = useUser();
  const [id, setId] = useState<number>(match.params.id);
  const [playerWidth, setPlayerWidth] = useState('100%');
  const [status, setStatus] = useState('NONE');

  useEffect(() => {}, []);

  const startWebCam = () => {
    setPlayerWidth('45%');
    setStatus('READY');
  };

  const recordWebCam = () => {
    setStatus('RECORD');
  };

  const pauseWebCam = () => {
    setStatus('PAUSE');
  };

  const downloadWebCam = () => {
    setStatus('DOWNLOAD');
  };

  const stopWebCam = () => {
    setPlayerWidth('100%');
    setStatus('NONE');
  };

  return (
    <ColumnContainer width="100%" marginBottom="50px">
      <RowContainer
        width="100%"
        marginBottom="20px"
        style={{ justifyContent: 'space-between' }}
      >
        <FitnessVideoPlayer width={playerWidth} exerciseId={id} />
        {status !== 'NONE' && (
          <WebCamPlayer
            width={playerWidth}
            status={status}
            setStatus={setStatus}
          />
        )}
      </RowContainer>
      {status === 'NONE' && (
        <Button
          marginBottom="20px"
          style={{ marginLeft: 'auto' }}
          onClick={startWebCam}
        >
          영상찍기
        </Button>
      )}
      {status === 'READY' && (
        <Button
          marginBottom="20px"
          style={{ marginLeft: 'auto' }}
          onClick={recordWebCam}
        >
          녹화하기
        </Button>
      )}
      {status === 'RECORD' && (
        <Button
          marginBottom="20px"
          style={{ marginLeft: 'auto' }}
          onClick={pauseWebCam}
        >
          중단하기
        </Button>
      )}
      {status === 'PAUSE' && (
        <RowContainer width="100%">
          <Button
            marginBottom="20px"
            style={{ marginLeft: 'auto' }}
            onClick={downloadWebCam}
          >
            다운로드
          </Button>
          <Button
            marginBottom="20px"
            style={{ marginLeft: '10px' }}
            onClick={stopWebCam}
          >
            처음으로
          </Button>
        </RowContainer>
      )}
      <UploadVideo exerciseId={id} />
    </ColumnContainer>
  );
}

export default FitnessVideo;
