import axios from 'axios';

export const createReservation = (reservation) => (
	axios({
		method: 'POST',
		url: '/api/reservations',
		data: {reservation}
	})
);


export const fetchUserReservations = userId => (
	axios({
		method: 'GET',
		url: '/api/reservations',
		data: {userId}
	})
);

export const fetchSingleReservation = (id) => (
	axios({
		method: 'GET',
		url: `/api/reservations/${id}`
	})
);

export const deleteReservation =(id) =>(
	axios({
		method: 'DELETE',
		url: `/api/reservations/${id}`
	})
)