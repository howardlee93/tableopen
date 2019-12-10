// nav.jsx

import React from 'react';
import { Link } from 'react-router-dom';


const Nav = ({ currentUser, login, logout, openModal, history }) => {
	const handleLogout = () =>(
		logout().then(()=>(
			history.push("/")
		))
	);

	const sessionLinks = () => (
		<nav className="navbar-container">
	      <div className = "navbar-session">
	        <div className="nav-header">
	          <Link to="/" className="top-bar-logo-link">
	            <h1 className="top-bar-logo-name">StarTable</h1>
	          </Link>
	          <p> Find Michelin-Starred Restaurants Near You</p>
	        </div>

	        <div className="nav-session">
	          <button className="btn" onClick={() => openModal('signup')}>Sign up</button>
	          <button className="btn" onClick={() => openModal('login')}>Sign in</button>
	          <button className="btn btn-demo"
	            onClick={() => login({email: "guest@mail.com", password:"password"})}>
	            Demo
	          </button>
	        </div>
	      </div>
	   	</nav>
	);

	const personalGreeting = () => (
	);

	return (
		currentUser ?
		personalGreeting(currentUser, logout) :
		sessionLinks()
	);
};