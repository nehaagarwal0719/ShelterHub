import React  , {Component} from 'react';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Web3 from 'web3';
import Admin1 from './Admin1.js';
import freelancer from '../abis/freelancer.json';

class owner extends Component{

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
    const networkId = await web3.eth.net.getId()
    const networkData = freelancer.networks[networkId]
    if(networkData){ 
     const Freelancer = new web3.eth.Contract(freelancer.abi,networkData.address)
     this.setState({Freelancer})
     this.setState({loading:false})
      }
    else{
    window.alert("Contract not deployed to the detected network");
  }
}


    constructor (props){
    super(props)
    this.state ={
      account: '',
      id:0,
      status:'',
      owner:'',
      purchased : true,
      loading : true
    }
   this.makeAvailable = this.makeAvailable.bind(this);
  }

makeAvailable(id,status) {
    this.setState({ loading: true })
    this.state.Freelancer.methods.createProperty(id,status).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })

  }
  render()
  {
    return(
    <div class ="container">
      <div class="row">
      
        <Owner1
        makeAvailable={this.makeAvailable}
        />
        
        </div>
    </div>
    );
  }
}

export default owner;
