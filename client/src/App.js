import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing1 from './components/Landing1'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Main from './components/main.js';
import Bid from './components/bid.js';
import Home from './components/Home.js';
import Choose from './components/choose.js';
import Info from './components/info.js';
import Sale from './components/sale.js';
import Rent from './components/rent.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing1} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile}  />
            <Route exact path="/work" component={Home} />
            <Route exact path="/sale" component={Sale} />
            <Route exact path="/rent" component={Rent} />
            <Route exact path="/choose" component={Choose} />
            <Route exact path="/bid/:cid" component={Bid} />
            <Route exact path="/info/:lid"  component={Info}/>

          </div>
        </div>
      </Router>
    )
  }
}

export default App