import React from 'react';
import { useHistory } from 'react-router-dom';

import { ColumnContainer, Text } from '../atoms';

function MenuBar() {
  const history = useHistory();

  const menus = [
    { menuName: '운동 하러 가기', url: '/afitch/fitness' },
    { menuName: '랭킹 보러 가기', url: '/afitch/fitness' },
    { menuName: '내가 올린 운동', url: '/afitch/fitness' },
    { menuName: '내가 먹은 음식', url: '/afitch/fitness' },
  ];

  const menuClicked = (url: string) => {
    history.push(url);
  };
  return (
    <ColumnContainer
      width="200px"
      height={`${menus.length * 30}px`}
      style={{
        position: 'absolute',
        top: '450px',
        left: '45px',
        background: 'white',
        border: '1px solid #E9B3B3',
      }}
    >
      {menus.map((v, i) => {
        return (
          <ColumnContainer
            width="200px"
            key={v.menuName}
            style={{
              paddingLeft: '10px',
              borderBottom: `${
                i === menus.length - 1 ? '' : '1px solid #E9B3B3'
              }`,
            }}
            onClick={() => {
              menuClicked(v.url);
            }}
          >
            <Text
              style={{ cursor: 'pointer' }}
              onClick={() => {
                console.log(v.menuName);
              }}
            >
              {v.menuName}
            </Text>
          </ColumnContainer>
        );
      })}
    </ColumnContainer>
  );
}

export default MenuBar;
