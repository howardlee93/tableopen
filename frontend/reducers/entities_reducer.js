//entities_reducer.js
import { combineReducers } from 'redux';

import restaurantReducer from './restaurant_reducer';
import reservationReducer from './reservation_reducer';
import reviewReducer from './review_reducer';
import favoritesReducer from './favorite_reducer';



export default combineReducers({
	restaurants: restaurantReducer,
	reservations: reservationReducer,
	reviews: reviewReducer,
	favorites: favoritesReducer

})