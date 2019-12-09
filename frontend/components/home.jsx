import React from 'react';
import SearchContainer from './search/search_container';

import DisplayContainer from './display/display_container';
// import Slider from '../slideshow/slide';


export default () => (
  <section id="main-body">
    <section className="hero-img-container">
    	<DisplayContainer/>
    </section>

    <section className="content">
      <div className="search-container">
        <SearchContainer />
      </div>
      
    </section>


  </section>
);