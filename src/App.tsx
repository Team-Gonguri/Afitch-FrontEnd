import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './GlobalStyle';

import Router from './Router';

function App() {
  return (
    <React.Fragment>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </React.Fragment>
  );
}

export default App;
