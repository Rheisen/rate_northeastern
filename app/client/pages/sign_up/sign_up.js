import React from 'react';

import Header from '../../components/header/header.js';

import './sign_up.scss';

class SignUp extends React.Component {
  render() {
    return (
      <section className={"pageWrapper pageSignUp"}>
        <Header />
        <section className={"signUpFormWrapper"}>
          <form className={"signUpForm"}>
            <h2>Sign Up for RateNortheastern</h2>
            <input type="text" className={"textInput firstName"} placeholder="First Name" />
            <input type="text" className={"textInput lastName"} placeholder="Last Name" />
            <input type="text" className={"textInput email"} placeholder="Email" />
            <input type="password" className={"textInput password"} placeholder="Password" />
            <input type="password" className={"textInput confirmPassword"} placeholder="Confirm Password" />
            <button className={"signUpButton"}>Sign Up</button>
          </form>
        </section>
      </section>
    )
  }
}

export default SignUp
