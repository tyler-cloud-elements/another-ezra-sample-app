import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import App from './App';
import Store, {history} from './store';
import './index.css';
import reportWebVitals from './reportWebVitals';

const storeInstance = Store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
  , document.querySelector('#root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
