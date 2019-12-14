// nav_container.js


import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';

import { login, logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser

});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps)(Nav);

