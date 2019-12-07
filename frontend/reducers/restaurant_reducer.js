//restaurant_reducer.js

import {
  RECEIVE_ALL_RESTAURANTS,
  RECEIVE_SINGLE_RESTAURANT,
  RECEIVE_RESTAURANT_ERRORS,
} from '../actions/restaurant_actions';

import {
  RECEIVE_SINGLE_FAVORITE,
  DESTROY_FAVORITE,
} from '../actions/favorite_actions';


const restaurantReducer = (state= {}, action) => {
	Object.freeze(state);
	let favorite;

	switch(action.type){
		case RECEIVE_SINGLE_RESTAURANT:
			return Object.assign({}, state, {[action.restaurant.id]: action.restaurant});
			
		case RECEIVE_ALL_RESTAURANTS:
			return action.restaurants;

		case RECEIVE_SINGLE_FAVORITE:
			favorite = action.favorite;
			return Object.assign({}, state, {[favorite.id]: favorite});

		case DESTROY_FAVORITE:
			favorite: action.favoriteId;
			return Object.assign({}, state, {[favorite.id]: favorite});

		default: 
			return state;	
	}
};

export default restaurantReducer;
