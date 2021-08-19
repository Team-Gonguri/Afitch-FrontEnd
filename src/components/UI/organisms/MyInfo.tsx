import React, { useEffect, useRef, useState } from 'react';

import { Button, ColumnContainer, RowContainer, Text } from '../atoms';
import { InputBox } from '../molecules';
import { modifyUserInfo } from '../../../repo/user';
import useUser from '../../../hook/useUser';

interface MyInfoProps {
  height: string;
  weight: string;
  nickName: string;
}

function MyInfo({ height, weight, nickName }: MyInfoProps) {
  const heightRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);
  const [disable, setDisable] = useState(true);
  const [modify, setModify] = useState(false);
  const { user } = useUser();

  const onModifyBtnClicked = () => {
    if (!disable) {
      setModify(!modify);
    }
    if (disable) {
      setDisable(!disable);
    }
  };

  useEffect(() => {
    if (modify) {
      if (heightRef.current && weightRef.current) {
        const hheigt = parseFloat(heightRef.current.value);
        const wweight = parseFloat(weightRef.current.value);
        console.log(hheigt, wweight);
        if (hheigt > 0 && wweight > 0) {
          modifyUserInfo(
            user.accessToken,
            {},
            {
              height: hheigt,
              nickName: nickName,
              weight: wweight,
            },
          ).then((d) => console.log(d));
        } else {
          alert('몸무게나 키는 양수여야합니다.');
        }
      }
      setDisable(!disable);
      setModify(!modify);
    }
  }, [modify]);

  return (
    <ColumnContainer width="100%" marginBottom="50px">
      <Text
        fontSize="2rem"
        fontWeight="bold"
        color="#E9B3B3"
        width="100%"
        marginBottom="20px"
      >
        내 정보
      </Text>
      <RowContainer width="100%" style={{ alignItems: 'center' }}>
        <Text width="auto" marginRight="10px">
          키
        </Text>
        <InputBox
          iRef={heightRef}
          iWidth="100px"
          iHeight="25px"
          marginRight="30px"
          disable={disable}
          dValue={height}
          onlyNumber={true}
        />
        <Text width="auto" marginRight="10px">
          몸무게
        </Text>
        <InputBox
          iRef={weightRef}
          iWidth="100px"
          iHeight="25px"
          marginRight="50px"
          disable={disable}
          dValue={weight}
          onlyNumber={true}
        />
        <Button
          width="auto"
          height="30px"
          style={{ padding: '0px 30px' }}
          onClick={onModifyBtnClicked}
        >
          {disable ? '수정하기' : '확인하기'}
        </Button>
      </RowContainer>
    </ColumnContainer>
  );
}

export default MyInfo;
