import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Sale from './sale.js';
import Rent from './rent.js';


class Choose extends Component{
   render(){
   return (

     <Router>
      <div>
      <Route path="/sale" component={Sale}/>
       <Route path="/work" component={Rent}/>

    <div className="container">
    <header class="header1">
  <div className="overlay"></div>
  <video  playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
    <source src='https://videominor.s3.amazonaws.com/video2.mp4' type="video/mp4"></source>
 
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">

      <div class="w-100 text-white">
        
         <div class="row  ">

          <div class="col-sm-6 ">
            <div class="card bg-light">
                <div class="card-block">
                  <h1 class="card-header text-center text-muted as">  <Link class="nounderline text-dark" to={'/sale/'} >
                                Buy
                            </Link></h1>
                </div>
            </div>
        </div>

         <div class="col-sm-6 ">
          <div class="card">
            <div class="card-block">
              <h1 class="card-header text-center text-muted as">  <Link class="nounderline text-dark" to={'/rent'} >
                                Rent
                            </Link></h1>
            </div> 
          </div>
        </div>

        </div>

      </div>
    </div>
  </div>
</header>
</div>
</div>
</Router>

        );
}
}

export default Choose
