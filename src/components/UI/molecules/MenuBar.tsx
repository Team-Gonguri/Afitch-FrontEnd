import React from 'react';
import { useHistory } from 'react-router-dom';

import { ColumnContainer, Text, LLink } from '../atoms';

function MenuBar() {
  const history = useHistory();

  const menus = [
    { menuName: '운동 하러 가기', url: '/afitch/fitness' },
    { menuName: '랭킹 보러 가기', url: '/afitch/rank' },
    { menuName: '내가 올린 운동', url: '/afitch/myfitness' },
    { menuName: '내가 먹은 음식', url: '/afitch/mydiet' },
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
              borderBottom: `${
                i === menus.length - 1 ? '' : '1px solid #E9B3B3'
              }`,
            }}
            onClick={() => {
              menuClicked(v.url);
            }}
          >
            <LLink
              width="200px"
              height="30px"
              color="black"
              to={v.url}
              style={{
                textAlign: 'start',
                cursor: 'pointer',
                paddingLeft: '10px',
                background: 'none',
              }}
              onClick={() => {
                console.log(v.menuName);
              }}
            >
              {v.menuName}
            </LLink>
          </ColumnContainer>
        );
      })}
    </ColumnContainer>
  );
}

export default MenuBar;
