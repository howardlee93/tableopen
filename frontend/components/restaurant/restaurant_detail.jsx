// restaurant_detail.jsx

import React, {useEffect} from 'react';
import { Route, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import ReservationFormContainer from '../reservation/reservation_form_container';

import ReviewFormContainer from '../review/review_form_container';

import ReviewIndexContainer from '../review/review_index_container';

import Loading from "../loading";


function RestaurantDetail(props){
	
	const scrollTo = el =>{
		el.scrollIntoView({ behavior: 'smooth' });

	}

	useEffect(()=>{
		window.scrollTo(0, 0);
    	props.requestSingleRestaurant(props.match.params.restaurantId);


	})

	const reservationFormChecker = () =>{
		if (props.currentUser){
			return (
				<Route
				path={`/restaurants/:restaurantId`}
				component={ReservationFormContainer}/>
				);
		}else{
			return(
				<div>
				<Route
				path={`/restaurants/:restaurantId`}
				component={ReservationFormContainer}/>
				</div>
				);
		}
	}

	const reviewFormChecker = () =>{
		if(props.loading){
			return <Loading/>;

		}
		if(!props.currentUser) { 
			return null; 
		}

		const resrvationUserIds = props.restaurant.resrvationUserIds;
		const currentUser = props.currentUser;
		if(reservationUserIds.includes(currentUser.id)){
			return(
				<Route path={'/restaurants/:restaurantId'}
				component={ReviewFormContainer}/>
				);
		}else{
			return(
				<div className="review-form-container review-form-messgae">
          			<p>Want to write a review? Make a reservation first!</p>
        		</div>
        		);
		}

	}

	const favoriteChecker = () => {
		if (!props.currentUser){
			return null;
		}
		const restaurant = props.restaurant;
		if (restaurant.currentUserLikes){
			return(
				<div
					onClick={this.deleteFavorite(restaurant.id)}
					>
					Restaurant saved!
					</div>
					);
		}else{
			return(
				<div
					onClick={this.createFavorite(restaurant.id)}
					>
					 Save this restaurant!
					</div>
				);
		}
	}

	const deleteFavorite = id =>{
		return e =>{
			e.preventDefault();
			props.deleteFavorite(id);
		};

	}

	const createFavorite = () =>{
		return e=> {
			e.preventDefault();
			props.createFavorite(props.restaurant.id);
		};
	}

	const getStar = () => {
		let starCount = props.restaurant.star;
		const stars =[];
		for (let i =0; i< starCount; i++){
			stars.push(
				<img
          			key={(""+Math.random()).substring(2,7)}
          			src='https://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523389939/star.png' />
      		);
		};
		return stars;

	}

	const getAvgRating = () => {
		const restaurant = props.restaurant;
		let sum = 0;
		for (let i = 0; i < restaurant.ratingArr.length; i++){
			sum += restaurant.ratingArr[i];
		};
		let avgRating;
		if (sum === 0){
			avgRating = "No ratings yet!";
		}else{
			avgRating = (Math.round(sum/restaurant.ratingArr.length * 10) / 10).toFixed(1);

		};
		return avgRating;
	}

	const getRate =() => {
		const restaurant = props.restaurant;
		let sum = 0;
		for (let i = 0; i < restaurant.ratingArr.length; i++){
			sum += restaurant.ratingArr[i];
		};
		let avgRating;
		if (sum === 0){
			avgRating = 0;
		}else{
			avgRating = Math.floor((sum / restaurant.ratingArr.length * 10) / 10);
		}

		const rateArr = [];
		for (let i = 0; i < avgRating; i++){
			rateArr.push(
				 <img
          			key={(""+Math.random()).substring(2,7)}
          			src="https://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523511580/rating_icon_full.png"
          			/>
				);
		};

		for (let i = avgRating; i< 5 ; i ++){
			rateArr.push(
				 <img
          			key={(""+Math.random()).substring(2,7)}
          			src="https://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523511580/rating_icon_full.png"
          		/>
          		);
		};
		return rateArr;

	}

	if (props.loading){
		return <Loading/>
	};

	if (props.restaurant){
		return null;
	};

	const restaurant = props.restaurant;

	return (

		<div className='restaurant-showpage'>
        <div className='restaurant-showpage-header'>
            <img
              className='showpage-header-img'
              src="https://res.cloudinary.com/chengzii/image/upload/v1523643464/restaurant_show.jpg" />
        </div>
        <div className="restaurant-main-container">
          <div className='restaurant-main-left'>
            <nav className='nav-link-wrapper'>
              <a className='page-nav-link' onClick={() => this.scrollTo(this.aboutSection)}>About</a>
              <a className='page-nav-link' onClick={() => this.scrollTo(this.reviewsSection)}>Reviews</a>
              <a className='page-nav-link' onClick={() => this.scrollTo(this.writeReviewsSection)}>Write a Review</a>
            </nav>

            <section className='restaurant-nav-info'>
              <div className='restaurant-nav-name'>
                <h1>{restaurant.name}</h1>
                <span className="restaurant-star">{this.getStar()}</span>
              </div>
              <div className='restaurant-nav-detail'>
                <span>{getRate()}</span>
                <div className='rating_icon'>{this.getAveRating()}</div>
                <div><i className="fa fa-comment"></i>{restaurant.countReview} reviews</div>
                <div><i className="fas fa-utensils"></i>{restaurant.cuisine} </div>
              </div>
            </section>



            <div className='restaurant-showpage-main'>
              <div ref={ el => { this.aboutSection = el;} } className='restaurant-content-about' id='about'>
                    <p className="restaurant-description">{restaurant.description}</p>
                    <p>Cusines: {restaurant.cuisine}</p>
                    <p>Phone number: {restaurant.phoneNumber}</p>
                    <p>Hours of operation: {restaurant.openTime} - {restaurant.closeTime}</p>
                    <p>Address: {restaurant.address}, {restaurant.city}, {restaurant.state} {restaurant.zipcode}</p>
              </div>

              <div
                ref={ el => { this.reviewsSection = el;} }
                className='restaurant-reviews'
                name='reviews'>
                  <h5>What {this.props.restaurant.ratingArr.length} People Are Saying</h5>
                  <Route path={'/restaurants/:restaurantId'}
                    component={ReviewIndexContainer} />
              </div>

              <div
                ref={ el => { this.writeReviewsSection = el;} }
                className='restaurant-reviews'
                name='writeReviews'>
                {reviewFromChecker()}
              </div>

            </div>
          </div>
          <aside className="restaurant-main-right">
            <div
              name='reservation'
              className='restaurant-reservation'>
                {reservationFormChecker()}
            </div>

            {favoriteChecker()}
          </aside>
        </div>
      	</div>
		);

}

export default withRouter(RestaurantDetail);





