// review_index.jsx	


import React, {useEffect} from 'react';
import ReviewIndexItem from './review_index_item';

function ReviewIndex(props){

	useEffect(()=>{
		props.requestRestaurantReviews(props.restaurantId);
	});
	
	if (Object.keys(props.reviews).length === 0){
		return null;
	}
	const reviews = Object.values(props.reviews).map((review, i)=>(
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
