// route_util.js

import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {openModal} from '../actions/modal_actions';

const Protected = ({component: Component, 
	path, 
	loggedIn, 
	exact, 
	openModal }) =>(
		<Route path={path} exact={exact} render={(props) =>{
			 if (loggedIn){
			 		return( <Component{...props }/>);
			 	}else{
			 		openModal();
			 		return null;
			 	}			 
		}}/>
	);




const mapStateToProps = state => ({
	loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
	openModal:() => dispatch(openModal("login"))
});

export const ProtectedRoute = withRouter(connect(
	mapStateToProps, mapDispatchToProps)(Protected));
