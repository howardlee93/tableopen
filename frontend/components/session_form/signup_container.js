import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import { login, signup, receiveErrors} from '../../actions/session_actions';
import Signup from './signup';

import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({errors}) => ({
	errors: session.errors,
	formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
	signup: formUser => dispatch(signup(formUser)),

	login: formUser => dispatch(login(formUser)),
	receiveErrors: errors => dispatch(receiveErrors(errors)),
	clearErrors: ()=> dispatch(receiveErrors([])),

	closeModal: () => dispatch(closeModal()),
	changeForm: (
		<a onClick={() => dispatch(openModal('login'))}>
		Log in 
		</a>
	)



});


export default connect(
	mapStateToProps,
	mapDispatchToProps)(Signup);
