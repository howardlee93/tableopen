import React from 'react';

import SearchContainer from './search/search_container';
import Modal from './modal';
import Home from './home';
import UserContainer from './user/user_container';



import {
  Route,
  Redirect,
  Switch,
  Link,
  BrowserRouter
} from 'react-router-dom';


const App = () => (

		<div>
			<h1>ProjectX</h1>
				<Modal/>
				<UserContainer/>
				<Home/>




			    <p>Hi! This web application was built with Ruby on Rails and React/Redux as a tribute to the popular reservation service OpenTable.</p>
			    <p>This is my capstone project for my Object Oriented Design and Analysis class</p>
			
			<footer>
			    <p> Copyright Howard Lee {new Date().getFullYear()}</p>
			    <a href="https://github.com/howardlee93" target="_blank"><p>Github</p></a><br />
          		<a href="/https://www.linkedin.com/in/leehoward93/" target="_blank"><p>LinkedIn</p></a><br />
          		<a href="https://howardlee93.github.io/" target="_blank"><p>Portfolio</p></a>

			</footer>
		</div>
);

export default App;


