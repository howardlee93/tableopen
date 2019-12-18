import React from 'react';

import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';


import Modal from './modal';
import Home from './home';
import UserContainer from './user/user_container';
import NavContainer from './nav/nav_container';

import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import AddRestaurant from './restaurant/add_restaurant_container';

import RestaurantDetailContainer from './restaurant/restaurant_detail_container';

import { ProtectedRoute } from '../util/route_util';


const App = () => (

		<div>
			<Modal/>
			<header id='top-of-page'>
				<Route path="/" component={NavContainer}/>
			</header>
			<Switch>
				<ProtectedRoute path="/restaurants/new" component={AddRestaurant}/>
				<Route exact path="/restaurants/:restaurantId" component={RestaurantDetailContainer}/>
				<ProtectedRoute exact path="/users/:userId" component={UserContainer}/>
				<Route path="/restaurants" component={RestaurantIndexContainer}/>
				<Route path="/" component={Home}/>
			</Switch>

			<footer className="main-footer">

				<p className="footer-about">Hi! This web application was built with Ruby on Rails and React/Redux to mimic OpenTable.
			    This is my capstone project for my Object Oriented Design and Analysis class</p>

			    <p className="footer-about"> Copyright Howard Lee {new Date().getFullYear()}</p>

			    <div  className="footer-links">
			    <a href="https://github.com/howardlee93" target="_blank">Github</a>
          		<a href="https://www.linkedin.com/in/leehoward93/" target="_blank" >LinkedIn</a>
          		<a href="https://howardlee93.github.io/" target="_blank">Portfolio</a>
          		</div>

			</footer>

		</div>
);

export default App;


