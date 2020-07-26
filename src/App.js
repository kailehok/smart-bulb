import React from 'react';
import MagicProvider from './magicProvider';
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

function App() {
  return(
    <MagicProvider>
        <div style={{backgroundColor:'black'}} className='pb-4 row d-flex align-items-center justify-content-center'>
            <Card centered style={{backgroundColor:'black', color: 'white'}} className='p-2 m-2' >
            <h1 className='mainHeader'>SMART BULB</h1>
            </Card>
            
        
        <div className='faucet'>
            <a href='https://icon-faucet.ibriz.ai/' rel="noopener noreferrer" target="_blank">Testnet ICX Faucet</a>
            </div>
            
            
       
        </div>
        
        <div className='row appContainer pt-3'>
            
            <div className='col-md-6 col-lg-7 col-sm-12 p-1'>
                <Buttons />
            </div>
            
            <div className='loginContainer col-md-5 col-lg-4 col-sm-12'>
                <Login />
            </div>
            
        </div>
    </MagicProvider>
    );
}

export default App;
