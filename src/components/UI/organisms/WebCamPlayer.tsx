import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';

import { ColumnContainer } from '../atoms';

interface WebCamPlayerProps {
  width: string;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

function WebCamPlayer({ width, status, setStatus }: WebCamPlayerProps) {
  const webcamRef = React.useRef<any>(null);
  const mediaRecorderRef = React.useRef<any>(null);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks],
  );

  useEffect(() => {
    console.log(status);
    if (status === 'RECORD') {
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
        mimeType: 'video/webm',
      });
      mediaRecorderRef.current.addEventListener(
        'dataavailable',
        handleDataAvailable,
      );
      mediaRecorderRef.current.start();
      console.log(mediaRecorderRef);
    }
    if (status === 'PAUSE') {
      console.log(mediaRecorderRef.current.state);
      mediaRecorderRef.current.stop();
    }
    if (status === 'DOWNLOAD') {
      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: 'video/mp4',
        });
        console.log(recordedChunks);
        console.log(blob);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        a.href = url;
        a.download = 'afitch.webm';
        a.click();
        window.URL.revokeObjectURL(url);
        setRecordedChunks([]);
      }
      setStatus('NONE');
    }
  }, [status]);

  return (
    <ColumnContainer width={width}>
      <Webcam
        width="100%"
        height="auto"
        audio={false}
        ref={webcamRef}
        mirrored
      />
    </ColumnContainer>
  );
}

export default WebCamPlayer;
