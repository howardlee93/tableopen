import axios from 'axios';



export const createReview = review =>(
axios({
	method: 'POST',
	url: '/api/reviews',
	data: {review}
})
);


export const fetchReview = reviewId => (
	axios({
		method: 'GET',
		url: `/api/reviews/${reviewId}`
	})
	);

export const fetchRestaurantReviews = restaurantId => (
	axios({
		method:'GET',
		url: '/api/reviews',
		data: {restaurantId}
	})
	);

export const deleteReview = reviewId => (
	axios({
		method: 'DELETE',
		url: `/api/reviews/${reviewId}`
	})
	);

export const updateReview = review => (
	axios({
		method: 'PATCH',
		url: `/api/reviews/${review.id}`,
		data: {review}
	})
	);


