import axios from 'axios';

export const fetchAllRestaurants = () => (
	axios({
		method: 'GET',
		url: '/api/restaurants',
	});
);


export const fetchSingleRestauran = restaurantId => (
	axios({
		method: 'GET',
		url: `/api/restaurants/${restaurantId}`
	});
);

export const createRestaurant = (restaurant) => (
	axios({
		method: 'POST',
		url: `/api/users/${restaurant.owner_id}/restaurants/`,
		data: {restaurant}
	});
);

export const fetchSearchRestaurants =(searchTerms) =>(
	axios({
		method: 'GET',
		url: '/api/restaurants/',
		data: {searchTerms}
	})
)