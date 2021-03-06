import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  FitnessCategory,
  MyFitness,
  FitnessList,
  FitnessVideo,
  Ranking,
  Comment,
  MyDiet,
  DetailDiet,
  RegistDiet,
} from './Switch';
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
    {
      props: {
        path: '/afitch/fitnessvideo/:id',
        exact: true,
        component: FitnessVideo,
      },
    },
    {
      props: {
        path: '/afitch/rank',
        exact: true,
        component: Ranking,
      },
    },
    {
      props: {
        path: '/afitch/comment/:exerciseId/:userId',
        exact: true,
        component: Comment,
      },
    },
    {
      props: {
        path: '/afitch/mydiet',
        exact: true,
        component: MyDiet,
      },
    },
    {
      props: {
        path: '/afitch/mydiet/detail',
        exact: true,
        component: DetailDiet,
      },
    },
    {
      props: {
        path: '/afitch/mydiet/regist',
        exact: true,
        component: RegistDiet,
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
