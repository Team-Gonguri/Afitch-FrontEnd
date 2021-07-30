import React from 'react';
import { useHistory } from 'react-router-dom';

import { ColumnContainer, Logo } from '../atoms';

function MainLogo() {
  const history = useHistory();

  const onLogoClicked = () => {
    history.push('/ptalk/fitness');
  };
  return (
    <ColumnContainer
      width="100vw"
      height="130px"
      style={{
        display: 'block',
        borderBottom: '1px solid #E9B3B3',
        paddingTop: '40px',
        paddingLeft: '40px',
      }}
    >
      <Logo width="150px" height="60px" onClick={onLogoClicked} />
    </ColumnContainer>
  );
}

export default MainLogo;
