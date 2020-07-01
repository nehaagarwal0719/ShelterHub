import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      fname: newUser.fname,
      lname: newUser.lname,
      email: newUser.email,
      password: newUser.password,
      phone: newUser.phone,
      aadhar:newUser.aadhar,
      address:newUser.address
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}