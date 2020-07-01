import React, { Component } from 'react';
import Web3 from 'web3';
import freelancer from '../abis/freelancer.json';
import InfoMain from './infomain'

class Info extends Component{

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

     const ledgerCount = await Freelancer.methods.ledgerCount().call()
     this.setState({ledgerCount})
     for(var i=1;i<=ledgerCount;i++){
      const ledger = await Freelancer.methods.ledgers(i).call()
      this.setState({
        ledgers:[...this.state.ledgers,ledger]
      })   
    }

     this.setState({loading:false})
     //console.log(this.state.bids)
      }
    else{
    window.alert("Contract not deployed to the detected network");
  }
}


  constructor (props){
    super(props)
   
    this.state ={
      account: '',
      ledgerCount:0, 
      propertyCount:0,
      ledgers:[],
      props:[],
      propertyCount:0,
      loading : true
    }

  }


  render()
  {
    const {params}=this.props;
    return(
    
     <div class ="container">
      <div class="row">
        <InfoMain ledgers ={this.state.ledgers} 
            props ={this.state.props}
         const lidd= {this.props.match.params.lid}
        />
        
        </div>
    </div>
      );
  }
}

export default Info;
