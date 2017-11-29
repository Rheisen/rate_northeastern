import React from 'react';
import { signInUser } from '../../actions/user_actions.js';

import Header from '../../components/header/header.js';

import './sign_up.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confPassword: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfPasswordChange = this.handleConfPasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        this.props.dispatch(signInUser(user));
        console.log(xhttp.responseText);
      }};
      xhttp.open("GET", "http://julianzucker.com:1234/create-account/name/" + this.state.firstName + "/password/" + this.state.password + "/email/" + this.state.email, true);
      xhttp.send();

    this.setState({firstName: '', lastName: '', email: '', password: '', confPassword: ''});
  }

  handleFirstNameChange(e) {
    this.setState({firstName: e.target.value});
  }

  handleLastNameChange(e) {
    this.setState({lastName: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleConfPasswordChange(e) {
    this.setState({confPassword: e.target.value});
  }

  render() {
    return (
      <section className={"pageWrapper pageSignUp"}>
        <Header />
        <section className={"signUpFormWrapper"}>
          <form className={"signUpForm"} onSubmit={this.handleSubmit}>
            <h2>Sign Up for RateNortheastern</h2>
            <input type="text" className={"textInput firstName"} value={this.state.firstName} onChange={this.handleFirstNameChange} placeholder="First Name" />
            <input type="text" className={"textInput lastName"} value={this.state.lastName} onChange={this.handleLastNameChange} placeholder="Last Name" />
            <input type="text" className={"textInput email"} value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" />
            <input type="password" className={"textInput password"} value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" />
            <input type="password" className={"textInput confirmPassword"} value={this.state.confPassword} onChange={this.handleConfPasswordChange} placeholder="Confirm Password" />
            <button className={"signUpButton"}>Sign Up</button>
          </form>
        </section>
      </section>
    )
  }
}

export default SignUp
