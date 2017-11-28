import React from 'react';
import { NavLink } from 'react-router-dom';
import MdSearch from 'react-icons/lib/md/search';

import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className={"pageHeader"}>
        <NavLink to={"/"}><h1 className={"rateNortheastern"}>RateNortheastern</h1></NavLink>
        <form className={"searchForm"}>
          <input type="text" className={"searchInput"} placeholder="Search RateNortheastern..." />
          <button type="submit" className={"searchButton"}>
            <MdSearch />
          </button>
        </form>
        <nav>
          <NavLink to="/sign-up" className={"signUp"}>Sign Up</NavLink>
          <NavLink to="/sign-in" className={"signIn"}>Sign In</NavLink>
        </nav>
      </header>
    )
  }
}

export default Header;