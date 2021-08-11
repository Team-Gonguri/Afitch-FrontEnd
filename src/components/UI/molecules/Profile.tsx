import React from 'react';

import { ColumnContainer, Img, Button, Text } from '../atoms';
import Logo from '../../../assets/Logo.png';
import useUser from '../../../hook/useUser';

interface ProfileProps {
  url?: string;
}

function Profile({ url }: ProfileProps) {
  const { user, setUser } = useUser();

  const logOutBtnClicked = () => {
    setUser({
      id: '',
      nickName: '',
      accessToken: '',
    });
  };

  return (
    <ColumnContainer
      width="200px"
      height="240px"
      style={{
        position: 'absolute',
        top: '200px',
        left: '45px',
        background: 'white',
        border: '1px solid #E9B3B3',
        paddingTop: '36px',
      }}
    >
      <Img
        width="88px"
        height="90px"
        marginBottom="20px"
        url={url ? url : Logo}
      />
      <Text
        height="22px"
        marginBottom="20px"
        style={{ justifyContent: 'center' }}
      >
        {user.id}
      </Text>
      {/* <Text
        height="22px"
        style={{ justifyContent: 'center' }}
        marginBottom="10px"
      >
        {user.nickName}
      </Text> */}
      <Button
        width="144px"
        height="23px"
        style={{ fontWeight: 'normal' }}
        color="black"
        onClick={logOutBtnClicked}
      >
        로그아웃
      </Button>
    </ColumnContainer>
  );
}

export default Profile;
