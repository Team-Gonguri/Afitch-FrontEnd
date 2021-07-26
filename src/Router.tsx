import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SignIn, SignUp } from './components/pages';

function Router() {
  const Routes = [
    { props: { component: SignIn, path: '/', exact: true } },
    { props: { component: SignUp, path: '/signup', exact: true } },
  ];

  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((v) => {
          return <Route {...v.props} />;
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
