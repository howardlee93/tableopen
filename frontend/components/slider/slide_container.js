// slider_container.js

import React from 'react';
import { connect } from 'react-redux';
import { searchRestaurants } from '../../actions/restaurant_actions';


import { openModal, closeModal } from '../../actions/modal_actions';

import Slide from './slide';


const mapDispatchToProps = dispatch => ({
	openModal: modal => dispatch(openModal(modal)),
	closeModal : () => dispatch(closeModal()),
	searchRestaurants: restaurant => dispatch(searchRestaurants(restaurant))
});

export default connect(
	null,
	mapDispatchToProps)(Slide);
