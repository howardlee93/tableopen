//reservation_actions.js 

import * as APIUtil from '../util/reservation_api_util';

export const RECEIVE_ALL_RESERVATION = 'RECEIVE_ALL_RESERVATION';
export const RECEIVE_SINGLE_RESERVATION = 'RECEIVE_SINGLE_RESERVATION';
export const DESTROY_RESERVATION = 'DESTROY_RESERVATION';

export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';

const receiveAllReservations = reservations =>({
	type: RECEIVE_ALL_RESERVATION,
	reservations
});

const receiveSingleReservation = reservation =>({
	type: RECEIVE_SINGLE_RESERVATION,
	reservation
});

const destroyReservation = reservationId => ({
	type: DESTROY_RESERVATION,
	reservationId
});

export const receiveReservationErrors = errors => ({
	type: RECEIVE_RESERVATION_ERRORS,
	errors
})

export const createReservation = reservation => dispatch => (

	APIUtil.createReservation(reservation)
    .then((newReservation) => {
      dispatch(receiveSingleReservation(newReservation.id));
    }, err => (dispatch(receiveReservationErrors(err.responseJSON))))
);

export const requestSingleReservation = id => (
	APIUtil.fetchSingleReservation(id)
		then(reservation =>{
			dispatch(receiveSingleReservation(reservation));
			return reservation;
		})	
);


export const requestUserReservations = userId => dispatch =>(
	APIUtil.fetchUserReservation(userId)
		then((reservation) => dispatch(receiveAllReservations(reservations)),
			err => dispatch(receiveReservationErrors(err.responseJSON)))
	);

export const updateReservation = reservation => dispatch =>(
	APIUtil.updateReservation(reservation)
		then(updatedReservation => dispatch(receiveSingleReservation(updatedReservation)),
			err => dispatch(receiveReservationErrors(err.responseJSON)))
	);

export const deleteReservation = id => dispatch =>(
	APIUtil.deleteReservation(id)
	then(reservation => dispatch(destroyReservation(reservation.id)),
		err => dispatch(receiveReservationErrors(err.responseJSON)))
	); 