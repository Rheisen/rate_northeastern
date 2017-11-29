import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MdSearch from 'react-icons/lib/md/search';

import { search, updateSearchText, clearSearchText } from '../../actions/search_actions';

import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  search(text) {
    var xhttp = new XMLHttpRequest({mozSystem: true});
    var self = this;
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        self.props.dispatch(search(xhttp.responseText));
      }};
    xhttp.open("GET", "http://julianzucker.com:1234/search/type/" + text, true);
    xhttp.send();
  }

  handleSearchText(e) {
    this.props.dispatch(updateSearchText(e.target.value));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.search(this.props.searchText);
    this.props.dispatch(clearSearchText());
  }

  render() {
    let HeaderNav;
    if (this.props.user.signedIn) {
      HeaderNav = (
        <nav>
          <NavLink to="/account" className={"account"}>Account</NavLink>
        </nav>
      );
    } else {
      HeaderNav = (
        <nav>
          <NavLink to="/sign-up" className={"signUp"}>Sign Up</NavLink>
          <NavLink to="/sign-in" className={"signIn"}>Sign In</NavLink>
        </nav>
      );
    }

    return (
      <header className={"pageHeader"}>
        <NavLink to={"/"}><h1 className={"rateNortheastern"}>RateNortheastern</h1></NavLink>
        <form className={"searchForm"} onSubmit={this.handleSubmit}>
          <input type="text"
                 className={"searchInput"}
                 value={this.props.searchText}
                 onChange={this.handleSearchText}
                 placeholder="Search RateNortheastern..."
          />
          <button type="submit" className={"searchButton"}>
            <MdSearch />
          </button>
        </form>
        { HeaderNav }
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user, searchText: state.searchText}
}

const HeaderConnect = connect(mapStateToProps)(Header);

export default HeaderConnect;
