import React from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';

import { FitnessCategory, MyFitness, FitnessList } from './Switch';
import { ColumnContainer } from '../../UI/atoms';
import { MainLayout } from '../../UI/organisms';

function MenuSwitch() {
  const routes = [
    {
      props: {
        path: '/afitch/fitness',
        exact: true,
        component: FitnessCategory,
      },
    },
    {
      props: { path: '/afitch/myfitness', exact: true, component: MyFitness },
    },
    {
      props: {
        path: '/afitch/fitnesslist/:fitness',
        exact: true,
        component: FitnessList,
      },
    },
  ];

  return (
    <ColumnContainer style={{ minWidth: '1440px' }}>
      <MainLayout />
      <ColumnContainer
        width="calc(100% - 355px);"
        style={{
          position: 'absolute',
          top: '200px',
          left: '300px',
          minWidth: '1105px',
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
