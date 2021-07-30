import React from 'react';

import { ColumnContainer, Img, Button, Text } from '../atoms';
import Logo from '../../../assets/Logo.png';

interface ProfileProps {
  url?: string;
}

function Profile({ url }: ProfileProps) {
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
      <Text height="22px" style={{ justifyContent: 'center' }}>
        id
      </Text>
      <Text
        height="22px"
        style={{ justifyContent: 'center' }}
        marginBottom="10px"
      >
        닉네임
      </Text>
      <Button
        width="144px"
        height="23px"
        style={{ fontWeight: 'normal' }}
        color="black"
      >
        로그아웃
      </Button>
    </ColumnContainer>
  );
}

export default Profile;