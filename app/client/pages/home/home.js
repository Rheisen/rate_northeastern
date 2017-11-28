import React from 'react';
import MdSearch from 'react-icons/lib/md/search';

import './home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={"pageWrapper pageHome"}>
        <header>
          <h1>RateNortheastern</h1>
          <form className={"searchForm"}>
            <input type="text" className={"searchInput"} placeholder="Search RateNortheastern..." />
            <button type="submit" className={"searchButton"}>
              <MdSearch />
            </button>
          </form>
          <nav>
            <a href={""} className={"signUp"}>Sign Up</a>
            <a href={""} className={"signIn"}>Sign In</a>
          </nav>
        </header>
        <section className={"searchSection"}>
        </section>
      </div>
    )
  }
}

export default Home;