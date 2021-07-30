import React from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';

import { FitnessList, MyFitness } from './Switch';
import { ColumnContainer, Button } from '../../UI/atoms';
import { MainLayout } from '../../UI/organisms';

function MenuSwitch() {
  console.log('s');
  const history = useHistory();
  const routes = [
    {
      props: { path: '/ptalk/fitness', exact: true, component: FitnessList },
    },
    {
      props: { path: '/ptalk/myfitness', exact: true, component: MyFitness },
    },
  ];

  return (
    <ColumnContainer>
      <MainLayout />
      <ColumnContainer
        width="calc(100vw - 355px);"
        style={{
          position: 'absolute',
          top: '200px',
          left: '300px',
        }}
      >
        <Switch>
          {routes.map((v) => {
            return <Route key={v.props.path} {...v.props} />;
          })}
        </Switch>
      </ColumnContainer>
    </ColumnContainer>
  );
}

export default MenuSwitch;
