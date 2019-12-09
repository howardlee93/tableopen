// user_container.js
import { connect } from 'react-redux';
import User from './user';

import {
  requestUserReservations,
  deleteReservation
} from '../../actions/reservation_actions';

import {requestUserReviews} from '../../actions/review_actions';

import {
  requestUserFavorites,
  deleteFavorite
} from '../../actions/favorite_actions';

const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps)(User);