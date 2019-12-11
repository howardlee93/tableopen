import React from 'react';
import SearchContainer from './search/search_container';

import DisplayContainer from './display/display_container';
import SlideContainer from './slider/slide_container';
import {Link} from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import AddRestaurant from './restaurant/add_restaurant_container';


export default () => (
  <section id="main-body">
    <section className="hero-img-container">
    </section>

    <section className="content">
      <div className="search-container">
        <SearchContainer />
      </div>
      <div className="cuisines">
        <h3>Top Cuisines</h3>
        <SlideContainer />
      </div>
      <DisplayContainer />
    </section>

    <section className="section-footer">
      <h4>Restaurateurs Join Us</h4>
      <p>Join the more than 40,000 restaurants which fill seats and</p>
      <p>manage reservations with StarTable.</p>
      <Link
        to="/restaurants/new"
        className="btn-demo"
        id="addRestaurant">
        Add Your Restaurant
      </Link>
    </section>

  </section>
);