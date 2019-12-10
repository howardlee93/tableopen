
export const fetchAllRestaurants = () => (
	$.ajax({
		method: 'GET',
		url: '/api/restaurants',
	})
);


export const fetchSingleRestaurant = restaurantId => (
	$.ajax({
		method: 'GET',
		url: `/api/restaurants/${restaurantId}`
	})
);

export const createRestaurant = (restaurant) => (
	$.ajax({
		method: 'POST',
		url: `/api/users/${restaurant.owner_id}/restaurants/`,
		data: {restaurant}
	})
);

export const fetchSearchRestaurants =(searchTerms) =>(
	$.ajax({
		method: 'GET',
		url: '/api/restaurants/',
		data: {searchTerms}
	})
);
