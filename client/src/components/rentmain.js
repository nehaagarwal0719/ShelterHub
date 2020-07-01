import React  , {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Bid from './bid.js';
import Info from './info.js';

class RentMain extends Component{

  constructor (props){
    super(props) 
    this.state ={
      account:'',
      loading : true
    }
  }


  render()
  {
    return(
      <Router>
      <div>
      <Route path="/bid"  component={Bid}/>
       <Route path="/info"  component={Info}/>
      </div>

       {this.props.props.map((property,key)=>{
        if(property.bstatus===true){
                    return(
       
      
        <div class="card-deck col-lg-offset-4 ">
             <div class="card mr-5 ml-5 mt-5 mb-5 one" >
                <div class="card-body bg-light">
      
                      <div class="card-text ">
                       <label class="col-lg-4" >Property ID:</label>
                      <label class="col-lg-4" >{property.id.toString()}</label>
                     
                      </div>

                      <div>
                       <label class="col-lg-4" >Name:</label>
                      <label class="col-lg-4" >{property.name}</label>
                      </div>
                      <div>
                       <label class="col-lg-4" >Location:</label>
                      <label class="col-lg-4" >{property.location}</label>
                      </div>
                      <div>
                       <label class="col-lg-4" >Description:</label>
                      <label class="col-lg-4"  >{property.des}</label>
                      </div>
                      <div>
                       <label class="col-lg-4" >Status:</label>
                      <label class="col-lg-4" >{property.status}</label>
                      </div>
                      
                 
                 </div>
                 <div class="card-footer">
                 <div class="row">
                  <div class="col-lg-1"></div>
                 <div class="col-lg-7">
                   <button>
                             <Link class="nounderline text-dark" to={'/info/'+property.id} >
                                  More Info
                            </Link>
                   </button>
                  </div> 
                   <div class="col-lg-4">
                   {property.status === "SALE" || property.status === "RENT" 
                          ? <button>
                            <Link class="nounderline text-dark" to={'/bid/'+property.id} >
                                Click to bid 
                            </Link>
                          </button>
                          :null
                         }
                    </div> 
                 </div>
                </div> 
          
     </div>
   </div>  

   );
                   }})}

      </Router>
    );
  }
}


export default RentMain;
