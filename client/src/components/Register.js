import React, { Component } from 'react'
import { register } from './UserFunctions'
import Web3 from 'web3';


class Register extends Component {
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


  constructor() {
    super()
    this.state = {
      account:'',
      fname: '',
      lname: '',
      email: '',
      phone:'',
      aadhar:'',
      password: '',
      address:'',
       fields: {},
        errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
  }
  onSubmit(e) {
    e.preventDefault()
 if (this.validateForm()) {
    const newUser = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      phone: this.state.phone,
      aadhar:this.state.aadhar,
      password: this.state.password,
      address:this.state.account
    }
    alert("Form submitted");
      
    register(newUser).then(res => {
      this.props.history.push(`/login`);
    })
  }
  }
  


validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!this.state.fname) {
        formIsValid = false;
        errors["fname"] = "*Please enter your username.";
      }

      if (typeof this.state.fname !== "undefined") {
        if (!this.state.fname.match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["fname"] = "*Please enter alphabet characters only.";
        }
      }
    

      if (!this.state.lname) {
        formIsValid = false;
        errors["lname"] = "*Please enter your username.";
      }

      if (typeof this.state.lname !== "undefined") {
        if (!this.state.lname.match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["lname"] = "*Please enter alphabet characters only.";
        }
      }

      if (!this.state.email) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof this.state.email!== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.email)) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!this.state.phone) {
        formIsValid = false;
        errors["phone"] = "*Please enter your phone no.";
      }

      if (typeof this.state.phone) {
           if (!this.state.phone.match(/^[0-9]{10}/)) {  
                 formIsValid = false;
                 errors["phone"] = "*Please enter numeric characters only and length should be 10.";
          }       
      }

       if (!this.state.aadhar) {
        formIsValid = false;
        errors["aadhar"] = "*Please enter your aadhar.";
      }

      if (typeof this.state.aadhar) {
           if (!this.state.aadhar.match(/^[0-9]{12}/)) {  
                 formIsValid = false;
                 errors["aadhar"] = "*Please enter numeric characters only and length should be 12.";
          }       
      }

       if (!this.state.password) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof this.state.password!== "undefined") {
        if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }





      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fname"
                  placeholder="Enter your first name"
                  value={this.state.fname}
                  onChange={this.onChange}
                />
                 <div className="errorMsg">{this.state.errors.fname}</div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  placeholder="Enter your last name"
                  value={this.state.lname}
                  onChange={this.onChange}
                />
                <div className="errorMsg">{this.state.errors.lname}</div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <div className="errorMsg">{this.state.errors.emailid}</div>
                </div>
                <div className="form-group">
                <label htmlFor="phone">Phone No.</label>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  placeholder="Enter phone no"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
                <div className="errorMsg">{this.state.errors.phone}</div>
                </div>
                <div className="form-group">
                <label htmlFor="aadhar">Aadhar No.</label>
                <input
                  type="aadhar"
                  className="form-control"
                  name="aadhar"
                  placeholder="Enter Aadhar No."
                  value={this.state.aadhar}
                  onChange={this.onChange}
                />
                <div className="errorMsg">{this.state.errors.aadhar}</div>

              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <div className="errorMsg">{this.state.errors.password}</div>
              </div>
              <button
                type="submit"
                className="button btn-lg  btn-block"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register