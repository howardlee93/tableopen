// display_container.js
import React from 'react';
import { connect } from 'react-redux';
import { searchRestaurants } from '../../actions/restaurant_actions';

import { openModal, closeModal } from '../../actions/modal_actions';

import Display from './display';


const mapDispatchToProps = dispatch => ({
	openModal: modal => dispatch(openModal(modal)),

	closeModal: ()=> dispatch(closeModal()),

	searchRestaurants: term => dispatch(searchRestaurants(term))

});


export default connect(
	null,
	mapDispatchToProps)(Display);
