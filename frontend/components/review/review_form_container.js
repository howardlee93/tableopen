// review_form_container.js	

import {connect} from 'react-redux';
import {
  createReview,
  receiveReviewErrors
} from '../../actions/review_actions';

import ReviewForm from './review_form';


const mapStateToProps = (state) =>({
	currentUser: state.session.currentUser,
	errors: state.errors.review
});

const mapDispatchToProps = dispatch =>({
	createReview: review => dispatch(createReview(review)),
	clearErrors: ()=> dispatch(receiveReviewErrors([]))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps)(ReviewForm)