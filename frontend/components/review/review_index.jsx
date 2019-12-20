// review_index.jsx	


import React, {useEffect} from 'react';
import ReviewIndexItem from './review_index_item';

function ReviewIndex(props){

	useEffect(()=>{
		console.log("mounted");
		props.requestRestaurantReviews(props.restaurantId);
		console.log(props.reviews);


	},[]);

	
	if (Object.keys(props.reviews).length === 0){
		return null;
	}
	const reviews = Object.values(props.reviews).map((review, i)=>(
		<ReviewIndexItem
          key={review.id}
          review={review}
          deleteReview={props.deleteReview}
          currentUser={props.currentUser}/>
		));
	

	return(
		<ul className="review-ul">
			<h1> Testing</h1>
			{reviews}
		</ul>
	);


}

export default ReviewIndex;

