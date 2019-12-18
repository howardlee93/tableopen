//favorite_reducer.js

import {
  RECEIVE_ALL_FAVORITES,
  RECEIVE_SINGLE_FAVORITE,
  DESTROY_FAVORITE,
} from '../actions/favorite_actions';



const favoriteReducer = (state= {}, action) => {
	Object.freeze(state);
	switch(action.type){

		case RECEIVE_ALL_FAVORITES:
			return action.favorites;
		case DESTROY_FAVORITE: 
			let newState = Object.assign({}, state);
			delete newState[action.favoriteId.id];
			return newState;

		default:
			return state;
	}
};



export default favoriteReducer;
