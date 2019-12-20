// review_index_item.jsx

import React from 'react';

function ReviewIndexItem(props){

	const getRate =() =>{
		let rating = props.review.rating;
		const rateArr = [];
		for (let i = 0; i< rating; i ++){
			rateArr.push(
				<img
          		key={(String(Math.random())).substring(2, 7)}
          		src="https://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523511580/rating_icon_full.png"
        		/>
			);
		}

		for (let i = rating; i < 5; i++){
			rateArr.push(
				<img
          			key={(String(Math.random())).substring(2, 7)}
          			src="https://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523511580/rating_icon_full.png"
        		/>
        	);
		}
		return rateArr;
	}

	const deleteReview = id =>{
		return e => {
			e.preventDefault();
			props.deleteReview(id);
		}
	}

	const review = props.review;
	let createdAt = review.created_at.slice(0,10);

	if (!props.currentUser){
		return(
			<li className="review-li">
          	<span className="review-name">{review.user.first_name}</span>
          	<span className="rate-icon">{getRate()}</span>
          	<span>
            <i className="fa fa-share" />
            comment on {createdAt}
          	</span>
          	<p>{review.comment}</p>
        	</li>
		);
	}else{
		return(
		<li className="review-li">
          <span className="review-name">
            {props.currentUser.id === review.user.id
              ? "You"
              : review.user.first_name}
          </span>
          <span className="rate-icon">{getRate()}</span>
          <span>
            <i className="fa fa-share" />
            comment on {createdAt}
            {props.currentUser.id === review.user.id ? (
              <button
                type="button"
                onClick={deleteReview(review.id)}
                className="btn btn-demo"
                id="delete-review"
              >
                Delete
              </button>
            ) : (
              ""
            )}
          </span>
          <p>{review.comment}</p>
        </li>
		);
	}
}


export default ReviewIndexItem;
