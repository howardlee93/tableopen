//review_reducer.js


import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  REMOVE_REVIEW,
  UPDATE_REVIEW
} from '../actions/review_actions';


const reviewReducer = ( state = {}, action) => {
	Object.freeze(state);
	switch(action.type){
		case RECEIVE_REVIEW:
			const review = action.review;
			return Object.assign({}, state, {[review.id]:review});
		case RECEIVE_REVIEWS:
			return action.reviews;
		case REMOVE_REVIEW:
			let newState = Object.assign({}, state);
			delete newState[action.reviewId];
			return newState;
		case UPDATE_REVIEW:
			const updatedReview = action.review;
			return Object.assign({}, state, {[updatedReview.id]: updatedReview});
			
		default:
			return state;
	}
};

export default reviewReducer;
