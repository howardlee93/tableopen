//favorite_errors_reducer.js

import {
  RECEIVE_FAVORITE_ERRORS,
} from '../actions/favorite_actions';

export default (state = [], action )=> {
	Object.freeze(state);
	switch(action.type){
		case RECEIVE_FAVORITE_ERRORS:
			return action.errors;
		default:
			return state;
			
	}
}