import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SignIn, SignUp, MenuSwitch } from './components/pages';

function Router() {
  const Routes = [
    { props: { component: SignIn, path: '/', exact: true } },
    { props: { component: SignUp, path: '/signup', exact: true } },
    { props: { component: MenuSwitch, path: '/afitch', exact: false } },
  ];

  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((v) => {
          return <Route key={v.props.path + 1} {...v.props} />;
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
