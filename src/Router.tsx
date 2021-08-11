/* eslint-disable prettier/prettier */
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
  useHistory,
} from 'react-router-dom';

import { SignIn, SignUp, MenuSwitch } from './components/pages';
import useUser from './hook/useUser';

function Router() {
  const Routes = [
    { auth: false, props: { component: SignIn, path: '/', exact: true } },
    { auth: false, props: { component: SignUp, path: '/signup', exact: true } },
    {
      auth: true,
      props: { component: MenuSwitch, path: '/afitch', exact: false },
    },
  ];

  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((v) => {
          if (!v.auth) return <Route key={v.props.path + 1} {...v.props} />;
          else return <AuthRoute key={v.props.path + 1} {...v.props} />;
        })}
      </Switch>
    </BrowserRouter>
  );
}

function AuthRoute(props: {
  component: () => JSX.Element;
  path: string;
  exact: boolean;
  key: string;
}) {
  const { user } = useUser();
  const history = useHistory();

  if (user.id) {
    return (
      <Route
        component={props.component}
        exact={props.exact}
        path={props.path}
      />
    );
  } else {
    history.replace('/');
    return <></>;
  }
}

export default Router;
