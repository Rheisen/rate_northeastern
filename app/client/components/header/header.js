import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MdSearch from 'react-icons/lib/md/search';

import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
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
        <form className={"searchForm"}>
          <input type="text" className={"searchInput"} placeholder="Search RateNortheastern..." />
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
  return {user: state.user}
}

const HeaderConnect = connect(mapStateToProps)(Header);

export default HeaderConnect;
