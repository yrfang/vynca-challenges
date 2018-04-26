import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import App from './containers/app';
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(reduxThunk, createLogger)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'));
