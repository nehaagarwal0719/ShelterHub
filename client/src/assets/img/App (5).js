import React from 'react';
import './App.css';
import about from './assets/img/about.jpg';
import first from './assets/img/images.jfif';
import second from './assets/img/7.jpg';
import third from './assets/img/6.png';
function App() {
  return (
    <div classsName="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top position: fixed" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger text-body font-weight-bold font-italic " href="#page-top" font color="whites">Shelter Hub</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome!</div>
        <div className="intro-heading text-uppercase">A Better Home Search</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Get Started</a>
      </div>
    </div>
  </header>

  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">About</h2>

          <h3 className="section-subheading text-muted">We are here to help you.</h3>
        </div>
      </div>
      <img src={about} className="about" alt="about" width="600" height="400" align="left" />
      <div class="ml-5"><ul>
        <h2 align="center"> A Better Home Search.</h2>
        <p className="section-subheading text-muted ml-8s" align="center"><i>Total transparency and direct access to landlords, listing brokers and property managers. No more middle-men.</i></p>
        <p className="section-subheading text-muted ml-5" align="center"><i>Your privacy protected. We’ll never sell your personal information to third parties.</i></p>
        <p className="section-subheading text-muted" align="center"><i>Multi layer listing verification. Get the best prices on the best homes.</i></p>
        <p className="section-subheading text-muted" align="center"><i>Removes intermediaries which speed up the process.</i></p>
      </ul>
    </div></div>
  </section>
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase text-body">Services</h2>
          <h3 className="section-subheading text-muted">A Better Home Search.</h3>
        </div>
      </div>
      <div class="row ">
        <div class="col-sm-4  ">
            <div class="card">
          
            <img src={first} className=" mx-auto" alt="about" width="300" height="350"/>
                <div class="card-block">
                    <h1 class="card-title text-center text-muted as">Buy</h1>
                    
                  
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
            <img src={second} className="mx-auto" alt="about" width="300" height="350" />
            <div class="card-block">
                    <h1 class="card-title text-center text-muted as">Rent</h1>
     
        
                </div> 
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card"><div class="card-header">
            <img src={third} className=" mx-auto" alt="about" width="150" height="100" /></div>
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

  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-12" >
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
       
      </div>
    </div>
  </footer>
  </div>
  );
}

export default App;
