import React from 'react';

import { ColumnContainer, Text } from '../atoms';

function MenuBar() {
  const menus = [
    { menuName: '운동 하러 가기' },
    { menuName: '랭킹 보러 가기' },
    { menuName: '내가 올린 운동' },
    { menuName: '내가 먹은 음식' },
  ];
  return (
    <ColumnContainer
      width="200px"
      height={`${menus.length * 30}px`}
      style={{
        position: 'absolute',
        top: '450px',
        left: '45px',
        background: 'white',
      }}
    >
      {menus.map((v) => {
        return (
          <ColumnContainer
            width="200px"
            key={v.menuName}
            style={{ paddingLeft: '10px', border: '1px solid #E9B3B3' }}
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
