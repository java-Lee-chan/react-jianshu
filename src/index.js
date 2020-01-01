import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style';
import { IconFont } from './statics/iconfont/iconfont';


ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconFont />
    <App />
  </Fragment>, 
  document.getElementById('root')
);

