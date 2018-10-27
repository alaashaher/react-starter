import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store.js';
import {Provider,connect} from 'react-redux';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Provider store={store} >

    <App/>
    </Provider>,
  document.getElementById('app')
);

module.hot.accept();
