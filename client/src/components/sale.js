import React, { Component } from 'react';
//import './App.css';
import Web3 from 'web3';
import freelancer from '../abis/freelancer.json';
import SaleMain from './salemain.js';
import Bid from './bid.js';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";


class Sale extends Component {

async componentWillMount(){
   document.title = "Blocklancer"
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
    const web3 = window.web3
    let latestBlock = await web3.eth.getBlock('latest')
    console.log('latestBlock',latestBlock)
    this.setState({
      blockNumber:latestBlock.number
    })
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
     const propertyCount = await Freelancer.methods.propertyCount().call()
     this.setState({propertyCount})
     for(var i=1;i<=propertyCount;i++){
      const property = await Freelancer.methods.props(i).call()
      this.setState({
        props:[...this.state.props,property]
      })      
     }


     this.setState({loading:false})
     console.log(this.state.props)
      }
    else{
    window.alert("Contract not deployed to the detected network");
  }
}

  constructor (props){
    super(props)
    this.state ={
      account: '',
      propertyCount :0,
      props :[],
      owner:'',
      loading : true,
      blockNumber:0,
      latestBlocks:[]
    }
  this.createProperty= this.createProperty.bind(this)
  
  //this.purchaseProduct = this.purchaseProduct.bind(this)
  }

createProperty(name,des,owner,type) {
    this.setState({ loading: true })
    this.state.Freelancer.methods.createProperty(name,des,owner,type).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }
  
  render() {
    return (
    <div class ="container">
      <div class="row">
        <SaleMain props ={this.state.props} 
        createProperty={this.createProperty}
        />
      
     
        </div>
    </div>
    );
  }
}

export default Sale;