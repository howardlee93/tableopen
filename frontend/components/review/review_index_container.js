// review_index_container.js	

import {connect} from 'react-redux';
import {
  requestRestaurantReviews,
  deleteReview
} from '../../actions/review_actions';
import ReviewIndex from './review_index';


const mapStateToProps = (state, ownProps) => ({
	reviews: state.entities.reviews,
	restaurantId: ownProps.match.params.restaurantId,
	restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
	currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
	requestRestaurantReviews: fetchInfo => dispatch(requestRestaurantReviews(fetchInfo)),
	deleteReview: reviewId => dispatch(deleteReview(reviewId))

});


export default connect(
	mapStateToProps,
	mapDispatchToProps)(ReviewIndex);
