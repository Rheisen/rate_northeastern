import React from 'react';
import { connect } from 'react-redux';
import { MdLocalRestaurant, MdLocationCity, MdPeople, MdSchool, MdShoppingCart } from 'react-icons/lib/md';

import Header from '../../components/header/header.js';

import './home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pageContent;
    if (this.props.searchText !== '') {
      pageContent = (
        <section className={"searchSection"}>
        </section>
      );
    } else if (this.props.search.length > 0) {
      pageContent = (
        <section className={"searchSection"}>
          <pre>{this.props.search.toString()}</pre>
        </section>
      );
    } else {
      pageContent = (
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
      );
    }

    return (
      <div className={"pageWrapper pageHome"}>
        <Header />
        <section className={"contentSection"}>
          {pageContent}
        </section>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {searchText: state.searchText, search: state.search}
}

const HomeConnect = connect(mapStateToProps)(Home);

export default HomeConnect;
