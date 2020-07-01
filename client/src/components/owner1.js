import React  , {Component} from 'react';
import Web3 from 'web3';
import jwt_decode from 'jwt-decode'
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

class owner1 extends Component{

   async componentWillMount(){
  await this.loadweb3()
  console.log(window.web3)
  await this.loadBlockchainData()
}


 async loadweb3(){
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }
async loadBlockchainData(){
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
}

  constructor (props){
    super(props)
   
    this.state ={
      account: '',
      cid:0
   
    }
  }

  render(){
    return(
        
    <div className="container">
        <div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
            
                <td id>Property Added</td>
                <td id ="propertyList">
              
                   {this.props.props.map((property,key)=>{
                    
                       
                   })}

                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      );
    
  }
}

export default owner1