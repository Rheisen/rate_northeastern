import React from 'react';

import Header from '../../components/header/header.js';

import './home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={"pageWrapper pageHome"}>
        <Header />
        <section className={"searchSection"}>
        </section>
      </div>
    )
  }
}

export default Home;