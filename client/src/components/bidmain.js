import React , {Component} from 'react';
import Web3 from 'web3';

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
                             Buy
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