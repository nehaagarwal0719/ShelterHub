import React, { Component } from 'react'
import about from '../assets/img/about.jpg' 
import first from '../assets/img/buy.jpg';
import second from '../assets/img/rent.jpeg';
import third from '../assets/img/sell.jpg';
var FontAwesome = require('react-fontawesome')

class Landing1 extends Component {
  render() {
    return (
      <div classsName="App">
  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Shelter Hub</div><br/>
        <div className="intro-heading ">A Better Home Search</div>
      </div>
    </div>
  </header>


<section className="page-section" id="about">
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
        
          </div>
        </div>
        <div>


      <div className="container">
         <div className="row margin">
            <div class="col-lg-6">
                <img src={about} className="about " alt="about" width="600" height="400" align="left" />
            </div>
      
              <div class="col-lg-6">
                <ul>
                  <h5 className="section-subheading text-muted" align="center"><i>Transparency, secure and decentralized system.</i></h5><br/><br/>
                  <h5 className="section-subheading text-muted" align="center"><i>Removes intermediaries such as brokers which speed up the process.</i></h5><br/><br/>
                  <h5 className="section-subheading text-muted" align="center"><i>Efficient, fast and cheaper transactions.</i></h5><br/><br/>
                  <h5 className="section-subheading text-muted" align="center"><i>Buy, Sell and Rent commodities using bidding. </i></h5><br/><br/>
                  <h5 className="section-subheading text-muted" align="center"><i>Time saved in verifiying property details. </i></h5><br/><br/>
                </ul>
              </div>
            </div>
          </div> 
        </div>
      </div>
  </section>




<section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase text-body">Services</h2>
        </div>
      </div>
      <div class="row margin ">
        <div class="col-sm-4  ">
            <div class="card">
          
            <img src={first} className=" mx-auto" alt="about" width="350" height="350"/>
                <div class="card-block">
                    <h1 class="card-title text-center text-muted as">Buy</h1>
                    
                  
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
            <img src={second} className="mx-auto" alt="about" width="350" height="350" />
            <div class="card-block">
                    <h1 class="card-title text-center text-muted as">Rent</h1>
     
        
                </div> 
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
            <img src={third} className=" mx-auto" alt="about" width="350" height="350" />
                <div class="card-block">
                    <h1 class="card-title text-center text-muted as">Sell</h1>
     
        
                </div>
            </div>
        </div>
        
    </div>
    </div>
  </section>

  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  
    </div>
    )
  }
}

export default Landing1