// user_container.js
import { connect } from 'react-redux';
import User from './user';

import {
  requestUserReservations,
  deleteReservation
} from '../../actions/reservation_actions';


import {
  requestUserFavorites
} from '../../actions/favorite_actions';

const mapStateToProps = state =>({
	currentUser: state.session.currentUser,
	reservations: state.entities.reservations,
	favorites: state.entities.favorites

});

const mapDispatchToProps = dispatch => ({
	requestUserReservations: userId => dispatch(requestUserReservations(userId)),
	deleteReservation: reservationId => dispatch(deleteReservation(reservationId)),
	requestUserFavorites: userId => dispatch(requestUserFavorites(userId))

});

export default connect(
	mapStateToProps,
	mapDispatchToProps)(User);