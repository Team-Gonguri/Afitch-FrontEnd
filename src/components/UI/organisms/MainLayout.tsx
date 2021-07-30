import React from 'react';

import { ColumnContainer } from '../atoms';
import { Profile, MainLogo, MenuBar } from '../molecules';

function MainLayout() {
  return (
    <ColumnContainer>
      <MainLogo />
      <Profile />
      <MenuBar />
    </ColumnContainer>
  );
}

export default MainLayout;
