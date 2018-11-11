import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './assets/css/pe-icon-7-stroke.css';
import './assets/sass/material-kit-pro-react.css?v=1.2.0';
import './assets/css/react-bootstrap.min.css';
import './assets/sass/light-react-bootstrap-dashboard-pro.css?v=1.1.1';
import './assets/css/Custom.css';
import './assets/css/animate.min.css';

//Create Store
import { createStore } from 'redux';
//reducer quản lý các state
import myReducer from './reducers/index';
//connect react với redux phải dùng Provider
import { Provider } from 'react-redux';

const store = createStore(myReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store ={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker()
