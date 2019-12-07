//review_errors_reducer.js



import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEW_ERRORS,
} from '../actions/review_actions';


const reviewErrorsReducer = (state= [], action) => {
	Object.freeze(state);

	switch(action.type){
		case RECEIVE_REVIEW:
			return [];
		case RECEIVE_REVIEW_ERRORS:
			return action.errors;
		default:
			return state;

	}

}