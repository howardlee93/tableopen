// restaurant_detail.jsx

import React from 'react';

import { Route, withRouter } from 'react-router-dom';

import ReservationFormContainer from '../reservation/reservation_form_container';

import ReviewFormContainer from '../review/review_form_container';

import ReviewIndexContainer from '../review/review_index_container';

import Loading from "../loading";


class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);

    this.getAveRating = this.getAveRating.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.createFavorite = this.createFavorite.bind(this);

  }


  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestSingleRestaurant(this.props.match.params.restaurantId);

  }

  scrollTo(el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  reservationFormChecker() {
    if(this.props.currentUser) {
      return (
        <Route
          path={`/restaurants/:restaurantId`}
          component={ReservationFormContainer}/>
      );
    } else {
      return (
        <div>
          <Route
            path={`/restaurants/:restaurantId`}
            component={ReservationFormContainer}/>
        </div>
      );
    }
  }


  reviewFromChecker() {
    if (this.props.loading) return <Loading/>;

    if(!this.props.currentUser) { 
      return (
      <div className="review-form-container review-form-messgae">
        <p>You need to sign in to review.</p>
      </div>     
        );     
    }

    const reservationUserIds = this.props.restaurant.reservationUserIds;
    const currentUser = this.props.currentUser;
    if(reservationUserIds.includes(currentUser.id)) {
      return (
        <Route path={'/restaurants/:restaurantId'}
            component={ReviewFormContainer} />
      );
    } else {
      return (
        <div className="review-form-container review-form-messgae">
          <p>Want to write a review? Make a reservation first!</p>
        </div>
      );
    }
  }

  favoriteChecker() {
    if(!this.props.currentUser) { return null; }
    const restaurant = this.props.restaurant;
    if(restaurant.currentUserLikes){
      return (
        <div
          onClick={this.deleteFavorite(restaurant.id)}
          className="favorite-btn favorite-active">
          <i className="far fa-bookmark"></i>
          Restaurant saved!
        </div>
      );
    } else {
      return (
        <div
          onClick={this.createFavorite(restaurant.id)}
          className="favorite-btn">
          <i className="far fa-bookmark"></i>
          Save this restaurant
        </div>
      );
    }
  }



  deleteFavorite(id){
    return (e) => {
     e.preventDefault();
     this.props.deleteFavorite(id);
    };
  }

  createFavorite(){
    return (e) => {
     e.preventDefault();
     this.props.createFavorite(this.props.restaurant.id);
    };
  }



  getStar() {
    let starCount = this.props.restaurant.star;
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push(
        <img
          key={(""+Math.random()).substring(2,7)}
          src='https://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523389939/star.png' />
      );
    }
    return stars;
  }

  getAveRating(){
    const restaurant = this.props.restaurant;
    let sum = 0;
    for (var i = 0; i < restaurant.rating_arr.length; i++) {
      sum += restaurant.rating_arr[i];
    }

    let aveRating;
    if (sum === 0) {
      aveRating = "No rating yet!";
    } else {
      aveRating = (Math.round(sum / restaurant.rating_arr.length * 10) / 10).toFixed(1);
    }

    return aveRating;
  }

  getRate() {
    const restaurant = this.props.restaurant;
    let sum = 0;
    for (var i = 0; i < restaurant.rating_arr.length; i++) {
      sum += restaurant.rating_arr[i];
    }

    let aveRating;
    if (sum === 0) {
      aveRating = 0;
    } else {
      aveRating = Math.floor((sum / restaurant.rating_arr.length * 10) / 10);
    }

    const rateArr = [];

    for (var i = 0; i < aveRating; i++) {
      rateArr.push (
        <img
          key={(""+Math.random()).substring(2,7)}
          src="https://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523511580/rating_icon_full.png"
          />
      );
    }

    for (var i = aveRating; i < 5 ; i++) {
      rateArr.push (
        <img
          key={(""+Math.random()).substring(2,7)}
          src="https://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523511580/rating_icon_empty.png"
          />
      );
    }
    return rateArr;
  }


  render() {
    if (this.props.loading) return <LoadingSpinner/>;

    if (!this.props.restaurant) return null;
    const restaurant = this.props.restaurant;

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
                <span>{this.getRate()}</span>
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
                  <h5>What {this.props.restaurant.rating_arr.length} People Are Saying</h5>
                  <Route path={'/restaurants/:restaurantId'}
                    component={ReviewIndexContainer} />
              </div>

              <div
                ref={ el => { this.writeReviewsSection = el;} }
                className='restaurant-reviews'
                name='writeReviews'>
                {this.reviewFromChecker()}
              </div>

            </div>
          </div>
          <aside className="restaurant-main-right">
            <div
              name='reservation'
              className='restaurant-reservation'>
                {this.reservationFormChecker()}
            </div>

            {this.favoriteChecker()}
          </aside>
        </div>
      </div>
    );
  }
}

export default withRouter(RestaurantDetail);




