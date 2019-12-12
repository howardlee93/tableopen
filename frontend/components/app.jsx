import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import SearchContainer from './search/search_container';
import Modal from './modal';
import Home from './home';
import UserContainer from './user/user_container';
import Nav from './nav/nav_container';

import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import AddRestaurant from './restaurant/add_restaurant_container';

import RestaurantDetailContainer from './restaurant/restaurant_detail_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (

		<div>
			<Modal/>
			<header>
				<Route path="/" component={Nav}/>
			</header>
			<Switch>
				<ProtectedRoute path="/restaurants/new" component={AddRestaurant}/>
				<Route exact path="/restaurants/:restaurantId" component={RestaurantDetailContainer}/>
				<ProtectedRoute exact path="/users/:userId" component={UserContainer}/>
				<Route path="/restaurants" component={RestaurantIndexContainer}/>
				<Route path="/" component={Home}/>
			</Switch>

			    <p>Hi! This web application was built with Ruby on Rails and React/Redux as a tribute to the popular reservation service OpenTable.</p>
			    <p>This is my capstone project for my Object Oriented Design and Analysis class</p>
			
			<footer>
			    <p> Copyright Howard Lee {new Date().getFullYear()}</p>
			    <a href="https://github.com/howardlee93" target="_blank"><p>Github</p></a><br />
          		<a href="https://www.linkedin.com/in/leehoward93/" target="_blank"><p>LinkedIn</p></a><br />
          		<a href="https://howardlee93.github.io/" target="_blank"><p>Portfolio</p></a>

			</footer>

		</div>
);

export default App;


