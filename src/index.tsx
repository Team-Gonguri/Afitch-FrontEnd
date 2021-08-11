import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import init from './repo/_axios';

init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
