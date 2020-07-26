// import React from 'react';
import React from "react";
import IconService from "icon-sdk-js";
import Light from './Light';
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

class History extends React.Component{
    constructor(props) {

        super(props);
        this.state = {
            tx:'',
            color:'white',
            loading: false,
            buttonLoading: '',
            history : [],
            magicData: {}
        };
    
        // I've just put these binding in the constructor 
        // so as not to clock up the render method and they only
        // get called once during the lifetime of the component
        // this.handleActionClick = this.handleActionClick.bind(this);
        // this.handlerSendTransaction=this.handlerSendTransaction.bind(this)
      }
      
      async componentDidMount() {
        await this.getTransaction();
      }
    
    // handlerSendTransaction = async (key) => {
    //   const {isLoggedIn} = this.props.value.loginData;
    //   if(!isLoggedIn){ 
    //     toast.error("Please Login First!!");
    //     return;
    //   }
    //   this.setState({loading: true, buttonLoading: key});

    // // onInputChange=(event)=>{
    // //     console.log(event.target.value)
    // //     this.setState({color:event.target.value});
       
    // // };
    getTransaction=async()=>{
        const call = new IconBuilder.CallBuilder()
        .to('cx8414e65c32e66d6831c8c4ee25b59f0bf98e080d')
        .method('get_history')
        .build()

        // const txnPayload = {
        //     jsonrpc: '2.0',
        //     method: 'icx_sendTransaction',
        //     params: IconConverter.toRawTransaction(txnData),
        //     id: 50889,
        //   };
        try{
          const result = await iconService.call(call).execute();
          // const response= await IconBuilder.Call(txObj);
          // console.log(result)
          this.setState({history:result})
        } catch(err) {
          toast.error(err.rawMessage);
          console.log(JSON.stringify(err));
        }
        
    }
    render(){
        const history = this.state.history
        history.reverse()
        const historyList = history.map((tx,index) =><h5>{index+1}. {tx}</h5>)
        return(
          <>
           <div style={{backgroundColor:'black'}} className='pb-4 row d-flex align-items-center justify-content-center'>
            <Card centered style={{backgroundColor:'black', color: 'white'}} className='p-2 m-2' >
            <h1 className='mainHeader'>    History</h1>
            </Card>
            </div>
           
            <div className='row d-flex justify-content-center mainContainer'>
          
              <div className='col-md-12'>
                
            
              
                    {historyList}
                
                <div className="row d-flex align-items-center justify-content-center mb-2">
                  <IoMdRefresh size={32} color='white' style={{cursor:'pointer'}} onClick={this.getTransaction} />
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
export default withMagicContext(History);


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