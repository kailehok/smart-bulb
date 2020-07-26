import React from 'react';
import MagicProvider from './magicProvider';
import Register from './Register';
import Login from './Login';
import Buttons from './Buttons';
import logo from './logo.svg';
import './App.css';
import {Route,Link} from 'react-router-dom';
import Home from './Home'
import 'semantic-ui-css/semantic.min.css';
import './bootstrap-grid.css';
import 'react-toastify/dist/ReactToastify.css';

import { Card } from 'semantic-ui-react';

function Reg() {
  return(
    <MagicProvider>
        <div >
<Register />        
            
        </div>
    </MagicProvider>
    );
}

export default Reg;
