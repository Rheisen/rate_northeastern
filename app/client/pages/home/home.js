import React from 'react';
import { MdLocalRestaurant, MdLocationCity, MdPeople, MdSchool, MdShoppingCart } from 'react-icons/lib/md';

import Header from '../../components/header/header.js';

import './home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={"pageWrapper pageHome"}>
        <Header />
        <section className={"contentSection"}>
          <div className={"contentWrapper"}>
            <section className={"contentBlock eateries"}>
              <h2><MdLocalRestaurant /></h2>
              <h3>Eateries</h3>
            </section>
            <section className={"contentBlock buildings"}>
              <h2><MdLocationCity /></h2>
              <h3>Buildings</h3>
            </section>
            <section className={"contentBlock professors"}>
              <h2><MdPeople /></h2>
              <h3>Professors</h3>
            </section>
            <section className={"contentBlock classes"}>
              <h2><MdSchool /></h2>
              <h3>Classes</h3>
            </section>
            <section className={"contentBlock groceryStores"}>
              <h2><MdShoppingCart /></h2>
              <h3>Grocery Stores</h3>
            </section>
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
