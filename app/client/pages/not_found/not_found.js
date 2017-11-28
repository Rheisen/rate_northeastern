import React from 'react';

import Header from '../../components/header/header.js';

import './not_found.scss';

class NotFound extends React.Component {
  render() {
    return (
      <section className={"pageWrapper pageNotFound"}>
        <Header />
        <h2 className={"notFoundText"}>404 Page Not Found</h2>
      </section>
    )
  }
}

export default NotFound;