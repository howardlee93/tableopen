import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

//for redux dev tools 


const middlewares = [thunk];

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const enhancer = composeEnhancers(applyMiddleware(... middlewares));


const configureStore = ( preloadedState = {}) => (
	createStore(rootReducer, preloadedState, applyMiddleware(thunk))
	);

export default configureStore;