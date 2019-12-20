// review_form.jsx	

import React from 'react';

class ReviewForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			user_id: "",
	        //restaurant_id subject to change depends on container
	        restaurant_id: this.props.match.params.restaurantId,
	        rating: "",
	        comment: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateRating = this.updateRating.bind(this);
		this.handleHover = this.handleHover.bind(this);
		this.handleHoverLeave = this.handleHoverLeave.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		this.ratingStars = this.ratingStars.bind(this);

		
	}
	componentDidMount(){
		this.props.clearErrors();

	}

	update(field){
		return e =>{
			this.setState({
				[field]: e.currentTarget.value
			});
		}
	}

	handleSubmit(e){
		e.preventDefault();
		if (!this.props.currentUser){
			return alert("Pleas log in");
		}else{
			this.state.user_id = this.props.currentUser.id;
		}

		this.props.createReview(this.state).then(()=>(
			this.setState({
				 user_id: "",
		        //restaurant_id subject to change depends on container
		        restaurant_id: this.props.match.params.restaurantId,
		        rating: "",
		        comment: ""
			})
		));
	}

	ratingStars(){
		let starArr = [];
		for (let i = 1; i< 6; i++){
			let id;
			let maxRating = this.state.hover ? this.state.hoverV: this.state.rating;
			if (i <= maxRating){
				id = 'full';
			}
			starArr.push(
		        <i
		          key={i}
		          className="fa fa-star"
		          id={id}
		          onMouseEnter={this.handleHover(i)}
		          onMouseLeave={this.handleHoverLeave}
		          aria-hidden="true"
		          onClick={this.updateRating(i)}>
		        </i>
			);
		}
		return starArr;
	}

	updateRating(rating){
		return e=> this.setState({rating: rating});
	}

	handleHover(i){
		return () =>this.setState({hover:true, hoverV: i});
	}

	handleHoverLeave(){
		this.setState({hover:false });
	}

	renderErrors() {
    	if (this.props.errors == []){ return null; }
    	return(
     <ul className="error-ul">
       {this.props.errors.map((error, i) => (
         <li key={`error-${i}`} >
           {error}
         </li>
       ))}
     </ul>
    	);
  	}

  	render(){
  		

  		return(   
  			<div className="review-form-container">
	       	{this.renderErrors()}
	       	<form className="review-form">
	          <h5>Write Reviews</h5>
	          <div className="rating-stars">{this.ratingStars()}</div>

	         <div className="review-form-middle">
	           <textarea
	            placeholder="Please leave your feedback!"
	            value={this.state.comment}
	            onChange={this.update('comment')}
	            className="review-text-input"
	           />
	         </div>

	         <div className="review-form-bottom">
	           <input type="submit"
	             onClick={this.handleSubmit}
	             value="Submit Review"
	             className="submit-button"
	             id="review-submit"
	           /><br/>
	         </div>
	       	</form>
     		</div>
     );
  	}

}

export default ReviewForm;
