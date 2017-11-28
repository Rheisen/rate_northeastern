import React from 'react';

import Header from '../../components/header/header.js';

import './sign_in.scss';

class SignIn extends React.Component {
  render() {
    return (
      <section className={"pageWrapper pageSignIn"}>
        <Header />
        <section className={"signInFormWrapper"}>
          <form className={"signInForm"}>
            <h2>Sign In to RateNortheastern</h2>
            <input type="text" className={"textInput email"} placeholder="Email" />
            <input type="password" className={"textInput password"} placeholder="Password" />
            <button className={"signInButton"}>Sign In</button>
          </form>
        </section>
      </section>
    )
  }
}

export default SignIn;
