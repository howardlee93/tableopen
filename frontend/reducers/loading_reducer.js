//loading_reducer.js


import {
  RECEIVE_SINGLE_RESTAURANT,
  RECEIVE_RESTAURANT_ERRORS,
  RECEIVE_ALL_RESTAURANTS,
  LOADING_RESTAURANT,
  LOADING_RESTAURANTS
} from "../actions/restaurant_actions";


const initialState = {
	indexLoading: false,
	showLoading: false
}


const loadingReducer = (state = initialState, action) => {
	Object.freeze(state);
	switch(action.type){
		case RECEIVE_ALL_RESTAURANTS:
			return Object.assign({}, state, {indexLoading: false});

		case RECEIVE_SINGLE_RESTAURANT:
			return Object.assign({}, state, {showLoading: false});

		case LOADING_RESTAURANTS:
			return Object.assign({}, state, {indexLoading: true});

		case LOADING_RESTAURANT:
			return Object.assign({}, state, {showLoading: true });
			
		case RECEIVE_RESTAURANT_ERRORS:
      		return Object.assign({}, state, { showLoading: false, indexLoading: false});


		default:
			return state;  
	}
}

export default loadingReducer;
 