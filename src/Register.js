// import React from 'react';
import MagicProvider from './magicProvider';
import React from "react";
import Login from"./Login";
import IconService from "icon-sdk-js";
// import Light from './Light';
import { Card } from 'semantic-ui-react';
import { withMagicContext } from './magicProvider';

import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import { IoMdRefresh } from 'react-icons/io';

const { IconBuilder, IconConverter,HttpProvider} = IconService;
const httpProvider = new HttpProvider('https://bicon.net.solidwallet.io/api/v3');
const iconService = new IconService(httpProvider);


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



class Register extends React.Component{
    constructor(props) {

        super(props);
        this.state = {
            tx:'',
            color:'white',
            loading: false,
            buttonLoading: '',
            magicData: {},
            username:'',
            address: '',
            magicData: {}
        };
    
        // I've just put these binding in the constructor 
        // so as not to clock up the render method and they only
        // get called once during the lifetime of the component
        // this.handleActionClick = this.handleActionClick.bind(this);
        this.handlerSendTransaction=this.handlerSendTransaction.bind(this)
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handleAddressChange=this.handleAddressChange.bind(this)
      }

    handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }
      
    
    handlerSendTransaction = async (username,address) => {
      const {isLoggedIn} = this.props.value.loginData;
      if(!isLoggedIn){ 
        toast.error("Please Login First!!");
        return;
      }
     

      try{
        const { magic } = this.props.value;
        const metadata = await magic.user.getMetadata();
    
        const txObj = new IconBuilder.CallTransactionBuilder()
          .from(metadata.publicAddress)
          .to('cx8414e65c32e66d6831c8c4ee25b59f0bf98e080d')
        //   .value(IconAmount.of(2, IconAmount.Unit.ICX).toLoop())
          .stepLimit(IconConverter.toBigNumber(1000000))
          .nid(IconConverter.toBigNumber(3))
          .nonce(IconConverter.toBigNumber(1))
          .version(IconConverter.toBigNumber(3))
          .timestamp(new Date().getTime() * 1000)
          .method('register')
          .params({
            "_username": username,
            "_address": address
          })
          .build();
          // console.log("called")
        const txhash = await magic.icon.sendTransaction(txObj);
    
        // setTxHash(txhash);
        this.setState({tx:txhash,
            // color:.target.id
            
        })
        toast.success("Successfully sent tx to contract");
        // console.log(key)
        // console.log("transaction result", txhash);
        
        await sleep(3000);

        
      }
      catch(err) {
        toast.error(err.rawMessage);
        console.log(JSON.stringify(err));
      }

      this.setState({loading: false, buttonLoading:''});
    };
    // onInputChange=(event)=>{
    //     console.log(event.target.value)
    //     this.setState({color:event.target.value});
       
    // };
   
    render(){
        return(

          <>
       
        
           <div style={{backgroundColor:'black'}} className='pb-4 row d-flex align-items-center justify-content-center'>
            <Card centered style={{backgroundColor:'black', color: 'white'}} className='p-2 m-2' >
            <h1 className='mainHeader'>    Register </h1>
            </Card>
            </div>
            <div className='row d-flex justify-content-center mainContainer'>
              <div className='col-md-12'>
                <div className='row d-flex align-items-center justify-content-center buttonContainer'>
                <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
            {console.log(this.state.username)}
          </label>
          
              
                 
        

                </div>
                <div className='row d-flex align-items-center justify-content-center buttonContainer'>
                <label>
            Wallet Address:
            <input type="text" value={this.state.address} onChange={this.handleAddressChange} />
          </label>

                </div>
                <div className='row d-flex align-items-center justify-content-center buttonContainer'>
          <Button color='red bulb-btn' disabled={this.state.loading} loading={this.state.loading && this.state.buttonLoading==='RED'} className='m-4' onClick={()=>this.handlerSendTransaction(this.state.username,this.state.address)} >Register</Button>
            </div>

                <div className="row d-flex align-items-center justify-content-center">
                    {this.state.tx ? (
                    <div>
                        <h2 style={{color: 'white', padding: '10px', textAlign:'center'}}>Tx Hash:</h2>
                        <div className="info">
                        <a
                            href={`https://bicon.tracker.solidwallet.io/transaction/${this.state.tx}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {this.state.tx}
                            
                        </a>
                        </div>
                    </div>
                    ) : (
                    null
                    )}
                
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                  {/* <Button style={refreshBtnStyle} onClick={this.getTransaction}>Refresh</Button> */}

                </div>
              </div>
           </div>
           <ToastContainer />
          </>
       
        );
    }
}
export default withMagicContext(Register);


// const Buttons=()=>{
//     return(
//         <div className='btn'>
//             <button onClick={'/'}>Red</button>
//             <button onClick={'/'}>Green</button>
//             <button onClick={'/'}>Blue</button>
//             <button onClick={'/'}>Yellow</button>
//         </div>
//     );
// }
// export default Buttons;