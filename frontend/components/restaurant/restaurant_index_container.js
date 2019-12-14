// restaurant_index.jsx
import { connect } from 'react-redux';

import RestaurantIndex from './restaurant_index';
import {
  requestAllRestaurants,
  requestSingleRestaurant
} from '../../actions/restaurant_actions';


const mapStateToProps = state => ({
	currentUser: state.currentUser,
  	restaurants: Object.values(state.entities.restaurants),
 	loading: state.ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  requestAllRestaurants: () => dispatch(requestAllRestaurants()),
  requestSingleRestaurant: () => dispatch(requestSingleRestaurant()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);