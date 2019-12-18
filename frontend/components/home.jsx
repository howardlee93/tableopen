import React from 'react';
import SearchContainer from './search/search_container';

import DisplayContainer from './display/display_container';
import {Link} from 'react-router-dom';


export default () => (
  <section id="main-body">
    <section className="hero-img-container">
    </section>

    <section className="content">
      <div className="search-container">
        <SearchContainer />
      </div>
        <DisplayContainer />
    </section>

    <section className="section-footer">
      <h4>Restaurateurs Join Us</h4>
      <h5>Join the more than 40,000 restaurants which fill seats and manage reservations with StarTable.</h5>
      <Link
        to="/restaurants/new"
        className="btn-demo"
        id="addRestaurant">
        Add Your Restaurant
      </Link>
    </section>

  </section>
);