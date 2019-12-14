// add_restaurant_container.js 

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AddRestaurant from './add_restaurant';
import {
  createRestaurant,
  receiveRestaurantErrors
} from '../../actions/restaurant_actions';



const mapStateToProps = ({errors}) => ({
	errors: errors.restaurant
});

const mapDispatchToProps = dispatch => ({
	createRestaurant: restaurant => dispatch(createRestaurant(restaurant)),
	clearErrors: () => dispatch(clearErrors([]))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps)(AddRestaurant);
	