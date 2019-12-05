//restaurant_reducer.js

import {
  RECEIVE_ALL_RESTAURANTS,
  RECEIVE_SINGLE_RESTAURANT,
  RECEIVE_RESTAURANT_ERRORS,
} from '../actions/restaurant_actions';


const restaurantReducer = (state= {}, action) => {
	Object.freeze(state);

	switch(action.type){
		case RECEIVE_SINGLE_RESTAURANT:
			return Object.assign({}, state, {[action.restaurant.id]: action.restaurant});
			
		case RECEIVE_ALL_RESTAURANTS:
			return action.restaurants;

		default: 
			return state;	
	}
};

export default restaurantReducer;
