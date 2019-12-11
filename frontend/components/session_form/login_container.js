//login_container.js

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, receiveErrors } from '../../actions/session_actions';
import Login from './login';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({errors}) =>({
	
	errors: errors.session,
	formType: 'login',
});


const mapDispatchToProps = dispatch => ({
	
	login: formUser => dispatch(login(formUser)),
	clearErrors: ()=> dispatch(receiveErrors()),

	closeModal: () => dispatch(closeModal()),
	changeForm: (
		<a onClick={() => dispatch(openModal('signup'))}>
		Create account
		</a>
	)

}); 

export default connect(
	mapStateToProps,
	mapDispatchToProps)(Login);
