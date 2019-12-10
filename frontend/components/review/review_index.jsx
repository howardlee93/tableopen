// review_index.jsx	import {connect} from 'react-redux';

import React from 'react';
import ReviewIndexItem from './review_index_item';

function ReviewIndex(props){
	if (Object.keys(props.reviews).length === 0){
		return null;
	}
	const revies = Object.values(props.reviews).map((review, i)=>(
		<ReviewIndexItem
          key={review.id}
          review={review}
          deleteReview={props.deleteReview}
          currentUser={tprops.currentUser}/>
		));
	
	return(
		<ul>
		{reviews}
		</ul>
	);

}

export default ReviewIndex;
