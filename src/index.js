import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
<App welcomMessage="welcome in our blog"/>,
  document.getElementById('app')
);

module.hot.accept();
