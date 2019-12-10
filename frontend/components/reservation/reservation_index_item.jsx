// reservation_index_item.jsx

import React from 'react';

const ReservationIndexItem = (props) => {
	const reservation = props.reservation;

	return(
		<div className="reservation-index-item">
        <h1>Date: {reservation.date}</h1>
        <h1>Time: {reservation.time}:00</h1>
        <h1>Table for {reservation.seats}</h1>
      </div>
     )
};

export default ReservationIndexItem;

