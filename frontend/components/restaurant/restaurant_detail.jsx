// restaurant_detail.jsx

import React, {useEffect} from 'react';
import { Route, withRouter } from 'react-router-dom';

import ReservationFormContainer from '../reservation/reservation_form_container';

import ReviewFormContainer from '../review/review_form_container';

import ReviewIndexContainer from '../review/review_index_container';

import Loading from "../loading";


function RestaurantDetail(props){
	
	const scrollTo = id =>{
		let el = document.getElementById(id);
		el.scrollIntoView({ behavior: 'smooth' });

	}

	useEffect(()=>{
		window.scrollTo(0, 0);
		console.log(props.restaurant);

    	props.requestSingleRestaurant(props.match.params.restaurantId);
    	console.log(props.match.params.restaurantId);
	}, [])

	const restaurant = props.restaurant;


	//favorites 
	const favoriteChecker = () =>{
		if (!props.currentUser){
			return null;
		}
		if (restaurant.currentUserLikes){
			return(
				<div
				 onClick={deleteFavorite(restaurant.id)}
          		className="favorite-btn favorite-active">
          		<i className="far fa-bookmark"></i>
          		Restaurant saved!
        		</div>
        		);
		}else{
			return(
				<div
          		onClick={createFavorite(restaurant.id)}
          		className="favorite-btn">
		        <i className="far fa-bookmark"></i>
		        Save this restaurant
		        </div>
		    );
		}
	}

	const deleteFavorite = id => {
		return e => {
			e.preventDefault();
			props.deleteFavorite(id);
		};
	}


	const createFavorite = ()  => {
		return e => {
			e.preventDefault();
			props.createFavorite(restaurant.id)
		}
	}

	//reservation

	const reservationFormChecker = () => {
	    if(props.currentUser) {
	      return (
	        <Route
	          path='/restaurants/:restaurantId'
	          component={ReservationFormContainer}/>
	      );
	    } else {
	      return (
	        <div>
	          <Route
	            path='/restaurants/:restaurantId'
	            component={ReservationFormContainer}/>
	        </div>
	      );
	    }
	  }


	// reviews
	const reviewFromChecker = () =>{
		if (props.loading){
			return <Loading/>
		}
		if (!props.currentUser){
			return (
				<div className="review-form-container review-form-messgae">
          			<p>You need to sign in to review.</p>
          		</div>
			);		
		}

		const reservationUserIds = props.restaurant.reservationUserIds;
		const currentUser = props.currentUser;
		if (reservationUserIds.includes(currentUser.id)){
			console.log("you are logged in");
			return(
				<Route path={'restaurants/:restaurantId'}
					component={ReviewFormContainer}/>
			);
		} else {
			return (
				<div className="review-form-container review-form-messgae">
          			<p>Want to write a review? Make a reservation first!</p>
          		</div>
			);
		}
	}


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
              <a className='page-nav-link' onClick={() => scrollTo("aboutSection")}>About</a>
              <a className='page-nav-link' onClick={() => scrollTo("reviewsSection")}>Reviews</a>
              <a className='page-nav-link' onClick={() => scrollTo("writeReviewsSection")}>Write a Review</a>
            </nav>

            <section className='restaurant-nav-info'>
              <div className='restaurant-nav-name'>
                <h1>{restaurant.name}</h1>
              </div>
              <div className='restaurant-nav-detail'>
                <span>Rating</span>
                <div className='rating_icon'><h3>Star</h3></div>
                <div><i className="fa fa-comment"></i>{restaurant.countReview} reviews</div>
                <div><i className="fas fa-utensils"></i>{restaurant.cuisine} </div>
              </div>
            </section>



            <div className='restaurant-showpage-main'>
              <div id=" aboutSection" className='restaurant-content-about' id='about'>
                    <p className="restaurant-description">{restaurant.description}</p>
                    <p>Cusines: {restaurant.cuisine}</p>
                    <p>Phone number: {restaurant.phone_number}</p>
                    <p>Hours of operation: {restaurant.open_time} - {restaurant.close_time}</p>
                    <p>Address: {restaurant.address}, {restaurant.city}, {restaurant.state} {restaurant.zipcode}</p>
              </div>

              <div
                id="reviewsSection"
                className='restaurant-reviews'
                name='reviews'>
                  <h5>What People Are Saying</h5>
                  <Route path={'/restaurants/:restaurantId'}
                    component={ReviewIndexContainer} />
              </div>

              <div
                id="writeReviewsSection"
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




