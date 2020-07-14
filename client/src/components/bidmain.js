import React , {Component} from 'react';
import Web3 from 'web3';
const BN = require('bn.js');
var BigNumber = require('bignumber.js');

class BidMain extends Component{

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
      loading : true
    }
  }


 handleAlternate(event){
   event.preventDefault()
  //const id = this.propertyId.value
  //this.props.forRent(id)
  const amount = Web3.utils.toWei('2.5', 'ether');

                          window.web3.eth.getAccounts(function(error, result) {
                          window.web3.eth.sendTransaction(
                              {from: "0xFf9cDA27303a80aFfB3560dF3a8053aA745931A6",
                              to: "0xff9cda27303a80affb3560df3a8053aa745931a6",
                              value:  amount, 
                              data: ""
                                  }, function(err, transactionHash) {
                            if (!err)
                              console.log(transactionHash); 
                          });
                      });
}

  render()
  {
      
    return(
      <div id="content">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 spacer">
         <form onSubmit={(event) => {
                event.preventDefault()
                const checkid =this.props.cidd
                const name = this.bidderName.value
                const message  = this.bidderMessage.value
                const price = window.web3.utils.toWei(this.bidderPrice.value.toString(), 'Ether')
                this.props.createBid(checkid,name,message,price)
          }}>
                <div className="form-group mr-sm-2">
                           <input
                              id="bidderName"
                              type="text"
                              ref={(input) => { this.bidderName = input }}
                              className="form-control mt-3"
                              placeholder="Name"
                              required />
                              <input
                              id="bidderDes"
                              type="text"
                              ref={(input) => { this.bidderMessage = input }}
                              className="form-control mt-3"
                              placeholder="Description"
                              required />
                              <input
                              id="bidderPrice"
                              type="text"
                              ref={(input) => { this.bidderPrice = input }}
                              className="form-control mt-3"
                              placeholder="Price"
                              required />
                  </div>          
                  <button type="submit" className="button btn-lg btn-block">Bid</button>
          </form>
          </div>


          <div class="col-lg-3 mt-5">
          <h2>Bid List</h2>
          <table className="table">
                <thead>
                  <tr>    
                  <th scope="col">#</th>
                   <th scope="col">Name</th>
                   <th scope="col">Message</th>
                   <th scope="col">Price</th>
                   <th scope="col">Bidder</th>
                   </tr>
                </thead>
                            
            <tbody id="bidList">
        
                  {this.props.bids.map((bid,key1)=>{
        
                  if(this.props.cidd==bid.checkid.toString()){
                   let p=bid.price
                    //let p1= Web3.utils.isBN(p);
                    //let p2=Web3.utils.toBN(p)
                    //let p3= Web3.utils.isBN(p2)
                    //var p4 = new BigNumber(1);
                    //p4.isZero()
                    //p4=p2.div(2)
                  
                   //let p5=Web3.utils.toBN(p4)
                    // let p4=p3/10
                  // window.web3.eth.sendTransaction({from: Web3.utils.utf8ToHex('0xFf9cDA27303a80aFfB3560dF3a8053aA745931A6'),to: Web3.utils.utf8ToHex('0xFf9cDA27303a80aFfB3560dF3a8053aA745931A6'), value: Web3.utils.toWei("1", "ether")})
                    //let p=Web3.toWei(p1);
                     //const p = window.web3.utils.toWei(p1.toString(), 'Ether')
                    //const p=window.web3.utils.toWei((bid.price/2).toString(),
                      //'Ether')
                     
                      //let p=Web3.utils.toBN(bid.price).divide(Web3.utils.toBN('1')).toString();

                        //var less_money = my_safe_money.div(3)

                       // n{p} {p1.toString()}
                       /*const amount = Web3.utils.toWei('p4', 'ether');

                          window.web3.eth.getAccounts(function(error, result) {
                          window.web3.eth.sendTransaction(
                              {from: "0xFf9cDA27303a80aFfB3560dF3a8053aA745931A6",
                              to: "0xff9cda27303a80affb3560df3a8053aa745931a6",
                              value:  amount, 
                              data: ""
                                  }, function(err, transactionHash) {
                            if (!err)
                              console.log(transactionHash); 
                          });
                      });*/

                    return(
                      <tr key={key1}>
                 
                       <td scope="row">{bid.bid_id.toString()}</td>
                        <td>{bid.name}</td>
                        <td>{bid.message}</td>
                        <td>{window.web3.utils.fromWei(bid.price.toString(),'Ether')}</td>
                        <td>{bid.bidder}</td>
                        {bid.status==true?
                        <td> <button
                             name={bid.bid_id}
                             value={bid.price}
                             onClick={(event)=>{
                               console.log("clicked")
                               
                               this.props.purchaseBid(event.target.name,event.target.value)
                              }}>
                             Pay to owner
                             </button>
                       </td>:null}
                       {bid.status==true?
                        <td> <button
                             name={bid.bid_id}
                             value={bid.price/10}

                             onClick={(event)=>{
                             console.log("clicked")
                               
                               this.props.purchaseBid(event.target.name,event.target.value)
                              }}>
                             Pay to government
                             </button>
                       </td>:null}

                      </tr>

                     );
                  }
                   })}
               </tbody>
          </table>  
          </div>
          </div>      
         </div>
         </div>
    
    );
  }
}

export default BidMain;