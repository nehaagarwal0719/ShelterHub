import React, { Component } from 'react'
import freelancer from '../abis/freelancer.json';
import jwt_decode from 'jwt-decode'
import Web3 from 'web3';
import Profile1 from './Profile1';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

class Profile extends Component {

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

     const propertyCount = await Freelancer.methods.propertyCount().call()
     this.setState({propertyCount})
     for(var i=1;i<=propertyCount;i++){
      const property = await Freelancer.methods.props(i).call()
      this.setState({
        props:[...this.state.props,property]
      })      
     }

     const bidCount = await Freelancer.methods.bidCount().call()
     this.setState({bidCount})
     for(var i=1;i<=bidCount;i++){
      const bid = await Freelancer.methods.bids(i).call()
      this.setState({
        bids:[...this.state.bids,bid]
      })      
     }

     this.setState({loading:false})
     console.log(this.state.props)
      }
    else{
    window.alert("Contract not deployed to the detected network");
  }
}
  constructor() {
    super()
    this.state = {
      account:'',
      fname: '',
      lname: '',
      email: '',
      phone:'',
      aadhar:'',
      errors: {},
      props:[],
      propertyCount :0,
      bidCount:0, 
      bids:[]
    }
     this.forSale = this.forSale.bind(this)
     this.forApprove = this.forApprove.bind(this)
     this.forRent = this.forRent.bind(this)
     this.createProperty = this.createProperty.bind(this);
     this.verifyProperty = this.verifyProperty.bind(this);
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      fname: decoded.fname,
      lname: decoded.lname,
      email: decoded.email,
      phone: decoded.phone,
      aadhar:decoded.aadhar
    })
  }

   forSale(id) {
    console.log("yes")
    this.setState({ loading: true })
    this.state.Freelancer.methods.forSale(id).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  forRent(id) {
    this.setState({ loading: true })
    this.state.Freelancer.methods.forRent(id).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

   verifyProperty(id) {
    this.setState({ loading: true })
    this.state.Freelancer.methods.verifyProperty(id).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }


 forApprove(id) {
    this.setState({ loading: true })
    this.state.Freelancer.methods.forApprove(id).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

 createProperty(name,des,owner,type,location) {
    this.setState({ loading: true })
    //let id1=this.props.params.id
       //this.state.cid =checkid
    this.state.Freelancer.methods.createProperty(name,des,owner,type,location).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })



  }
  render() {
    return (
      <div>
          <Profile1 props ={this.state.props}
         forSale={this.forSale}
         forRent={this.forRent}
         verifyProperty={this.verifyProperty}
          createProperty={this.createProperty}
          bids ={this.state.bids}
          forApprove={this.forApprove} 

           /> 
      </div>  
    )
  }
}

export default Profile