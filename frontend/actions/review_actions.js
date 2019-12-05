//review_actions.js

import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';

const receiveReviews = reviews => ({
	type: RECEIVE_REVIEWS,
	reviews
});


const receiveReview = review => ({
	type: RECEIVE_REVIEW,
	review
});

const removeReview = reviewId => ({
	type: REMOVE_REVIEW,
	reviewId
});

const updateReview = review => ({
	type: UPDATE_REVIEW,
	review
});


export const receiveReviewErrors = errors => ({
	type: RECEIVE_REVIEW_ERRORS,
	errors
});


export const createReview = review => dispatch => (
	APIUtil.createReview(review)
	.then(newReview => dispatch(receiveReview(newReview)),
		err=> dispatch(receiveReviewErrors(err.responseJSON)))
	);

export const requestReview = reviewId => dispatch => (
	APIUtil.fetchReview(reviewId)
	.then( review => dispatch(receiveReview(review)),
		err=> dispatch(receiveReviewErrors(err.responseJSON)))
	)

export const requestRestaurantReviews = restaurantId => dispatch => (
	APIUtil.fetchRestaurantReviews(restaurantId)
	.then(reviews => dispatch(receiveReviews(reviews)),
		err=> dispatch(receiveReviewErrors(err.responseJSON)))
	);


export const deleteReview = reviewId => dispatch => (
	APIUtil.deleteReview(reviewId)
	.then(review => dispatch(removeReview(review)),
		err=> dispatch(receiveReviewErrors(err.responseJSON)))
	);

export const editReview = review => dispatch => (
	APIUtil.updateReview(review)
	.then(updatedReview => dispatch(updateReview(updatedReview)),
		err => dispatch(receiveReviewErrors(err.responseJSON)))
	);


