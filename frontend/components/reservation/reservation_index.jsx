// reservation_index.jsx

import React from 'react';
import ReservationIndexItem from './reservation_index_item';

function ReservationIndex(props){

	const indexEl = () => {
		return Object.keys(props.reservations).map(i => (
			ReservationIndexItem key={i}
			reservation={props.reservations[i]}/>
			)
		);
	};
	return (
		<div>
		<h1> Reservations</h1>
		{indexEl()}
		</div>
	);
}

export default ReservationIndex;
