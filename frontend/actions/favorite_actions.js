import * as APIUtil from '../util/favorite_api_util';

export const RECEIVE_ALL_FAVORITES = 'RECEIVE_ALL_FAVORITES';
export const RECEIVE_SINGLE_FAVORITE = 'RECEIVE_SINGLE_FAVORITE';
export const DESTROY_FAVORITE = 'DESTROY_FAVORITE';

export const RECEIVE_FAVORITE_ERRORS = 'RECEIVE_FAVORITE_ERRORS';

const receiveAllFavorites = favorites => ({
	type: RECEIVE_ALL_FAVORITES,
	favorites
});

const receiveSingleFavorite = favorite => ({
	type: RECEIVE_SINGLE_FAVORITE,
	favorite
});

const removeFavorite = favoriteId => ({
	type: DESTROY_FAVORITE,
	favoriteId
});

export const receiveFavoriteErrors = errors =>({
	type: RECEIVE_FAVORITE_ERRORS,
	errors
});


export const createFavorite = favorite => dispatch => (
	APIUtil.createFavorite(favorite)
	.then(newFavorite => {
		dispatch(receiveSingleFavorite(newFavorite));
	},
		err => (dispatch(receiveFavoriteErrors(err.responseJSON))))
	);

export const requestSingleFavorite = id => dispatch =>(
	APIUtil.fetchSingleFavorite(id)
		.then(favorite =>{
			dispatch(receiveSingleFavorite(favorite));
			return favorite;
		})
	);

export const requestUserFavorites = userId => dispatch => (
	APIUtil.fetchUserFavorites(userId)
	.then(favorites => 
		dispatch(receiveAllFavorites(favorites)),
		err => dispatch(receiveFavoriteErrors(err.responseJSON)))
	);

export const deleteFavorite = id => dispatch => (
	APIUtil.deleteFavorite(id)
	.then(favorite => dispatch(removeFavorite(favorite)),
		err => dispatch(receiveFavoriteErrors(err.responseJSON)))
	);

