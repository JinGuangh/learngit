import React from 'react';
import ReactDOM from 'react-dom';
import './utils/init'
// 过渡动画样式
import './style/transistion.css'
import { Provider } from 'react-redux'
// 数据源
import store from './store'
// 路由
import { BrowserRouter as Router, HashRouter } from 'react-router-dom'

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)