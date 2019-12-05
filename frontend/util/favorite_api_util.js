import axios from 'axios';

export const createFavorites = id => (
	axios({
		method: "POST",
		url: '/api/favorites',
		data: {id}
		})
	);

export const fetchUserFavorites = userId => (
	axios({
		method: 'GET',
		url: '/api/favorites',
		data: {userId}
	})
	);

export const fetchSingleFavorite = id => (
	axio({
		method: 'GET',
		url: `/api/favorites/${id}`
	})
	);

export const deleteFavorite = id => (
	axios({
		method: 'DELETE',
		url: `/api/favorites/${id}`,
		data: {id}
	})
	);

