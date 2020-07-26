import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import History from './History'
import Reg from './Reg'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Link to = "/"> Home</Link>
    <Link to = "/register"> Register</Link>
    <Link to = "/history"> History</Link>
    <Route exact path = "/" component = {App} />
    <Route exact path = "/register" component = {Reg} />
    <Route exact path = "/history" component = {History} />
    
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
