import React, { useRef, useEffect, useState } from 'react';

import { ColumnContainer, RowContainer, Text } from '../atoms';
import { InputBoxButton, Reply } from '../molecules';

interface ReEntiry {
  id: string;
  contents: string;
}

function ReplyWindow() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [re, setRe] = useState<ReEntiry[]>([
    {
      id: '1',
      contents: '와',
    },
    {
      id: '2',
      contents: '대단해요',
    },
    {
      id: '3',
      contents: '조금 아쉽네요',
    },
    {
      id: '4',
      contents: '깔끔해요',
    },
    {
      id: '5',
      contents: '멋있어요',
    },
  ]);

  useEffect(() => {
    console.log(re);
  }, [re]);

  const onClick = () => {
    if (inputRef.current && inputRef.current.value) {
      const temp = re;
      temp.push({ id: '6', contents: inputRef.current.value });
      setRe([...temp]);
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
            아이디
          </Text>
          <Text fontWeight="bold" color="#E9B3B3" width="85%">
            내용
          </Text>
        </RowContainer>
        {re.map((v, i) => {
          return <Reply key={i} id={v.id} contents={v.contents} />;
        })}
      </ColumnContainer>
    </ColumnContainer>
  );
}

export default ReplyWindow;
