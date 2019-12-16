// user.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


function User(props){

	const deleteReservation = id =>(
		e =>{
			e.preventDefault();
			props.deleteReservation(id);
			}
		);

	const scrollTo = el => {
		return () => {
			el.scrollIntoView({
				behavior: 'smooth',
				block: "start"
			});
		};
	};


  useEffect(() =>{
    props.requestUserReservations(props.currentUser.id);
    props.requestUserFavorites(props.currentUser.id);
  });



	const getStar = res => {
		let starCount = res. restaurant.star;
		const star = [];

		for (let i =0; i < starCount; i++){
			stars.push(
				<img
          		key={(""+Math.random()).substring(2,7)}
          		src='https://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523389939/star.png' />
      		);
		}
		return stars;
	};

	const getUpcomingCount = () => {
		const upcoming = [];
		const today = new Date().toJSON();

		const allRes = Object.values(props.reservations);

		allRes.forEach(reservation => {
			if (Date.parse(today.slice(0,10)) <= Date.parse(reservation.date)){
				upcoming.push(reservation);
				}
		});

		if(upcoming.length > 0){
			return (
				<div>
					{upcoming.map((res, i)=> 
						<section key={`upcoming-${i}`}>
							<div className="restaurant-logo-container">
				            <img
				                className="restaurant-logo"
				                src={res.restaurant.logo}/>
				            </div>
				            <div className="restaurant-detail-container">
				              <Link
				                to={`/restaurants/${res.restaurant.id}`}
				                className="restaurant-name">
				                  {res.restaurant.name}
				                <span className="restaurant-star">{getStar(res)}</span>
				              </Link>


				              <div className='upcoming-res-date'>
				                {res.date}
				              </div>
				              <div className='upcoming-res-time'>
				                {res.time}:00
				              </div>
				              <div className='upcoming-res-seats'>
				                Table for {res.seats} {res.seats === 1 ? "person" : "people"}
				              </div>
				              <div className='upcoming-res-address'>
				              <i className="fas fa-map-marker-alt"></i>
				                {res.restaurant.address}, {res.restaurant.city}, {res.restaurant.state} {res.restaurant.zipcode}
				              </div>
				              </div>

				              <button type="button"
				                      onClick={deleteReservation(res.id)}
				                      className="btn btn-demo reservation-btn">
				                      Cancel
				              </button>
				         </section>

						)}
				</div>
				);
		}else{
      		return (
        	<p className="no-reservation">No upcoming reservations</p>
      		);
    	}
  	};

  	const pastReservations = () => {
  		let favorites = props.favorites;
  		if(Object.keys(favorites).length === 0){
  			return(
  				<p>No reservations</p>
  				)
  		}else{
  			return(
  				<div>
  				{Object.values(favorites).map((fav,i)=>
 					<section key={`favorite-${idx}`} className="reservation-list">
            		<div className="restaurant-logo-container">
              			<img
                			className="restaurant-logo"
                			src={fav.restaurant.logo}/>
            			</div>
            			<div className="restaurant-detail-container res-fav">
              			<Link
                			to={`/restaurants/${fav.restaurant.id}`}
                			className="restaurant-name">
                  			{fav.restaurant.name}  <i className="fas fa-heart"></i>
              			</Link>

			            <div className='past-res-date'>
			                Michelin Star Level: {fav.restaurant.star}
			            </div>
			            <div className='past-res-time'>
			                Cuisine: {fav.restaurant.cuisine}
			            </div>
			            <div className='past-res-time'>
			                Contact: {fav.restaurant.phone_number}
			            </div>

			            <Link
			                to={`/restaurants/${fav.restaurant.id}`}
			                className="btn btn-demo reservation-btn review-btn">
			                Reserve Now
			             </Link>

	            		</div>
          				</section>
  					)}
  				</div>
 			);
  		}
  	};

  	const user = props.currentUser;

  	return(
      	<section className='user-profile-main'>
        <div className="user-profile">
          <h3>{user.firstName} {user.lastName === "." ? "" : user.lastName}</h3>
        </div>

        <div className='user-profile-body'>
          <aside className='user-profile-side'>
            <div
              className='user-nav-link'
              onClick={scrollTo(upcomingSection)}
            >Upcoming Reservations</div>
            <div
              className='user-nav-link'
              onClick={scrollTo(pastSection)}
            >Past Reservations</div>
            <div
              className='user-nav-link'
              onClick={scrollTo(favoriteSection)}
            >Favorite Restaurants</div>
          </aside>

          <section className='user-profile-content'>
            <div className='user-profile-section'>
              <div className='user-profile-content-title' name='upcoming'
                ref={ el => upcomingSection = el }>
                <h2>
                  {getUpcomingCount() <= 1 ? "Upcoming Reservation" : "Upcoming Reservations"}
                  <span className="user-reservation-count">
                    {getUpcomingCount()}
                  </span>
                </h2>

              </div>
              <div className='user-profile-section-lists' >
                {upcomingReservations()}
              </div>
            </div>

            <div className='user-profile-section'>
              <div className='user-profile-content-title' name='past'
                ref={ el => pastSection = el }>
                <h2>
                  {getPastCount() <= 1 ? "Past Reservation" : "Past Reservations"}
                  <span className="user-reservation-count">{getPastCount()}</span>
                </h2>

              </div>
              <div className='user-profile-section-lists' >
                {pastReservations()}
              </div>
            </div>


            <div className='user-profile-section'>
              <div className='user-profile-content-title' name='favorite'
                  ref={ el => favoriteSection = el }>
                  <h2>Favorite Restaurants
                    <span className="user-reservation-count">
                      {Object.keys(props.favorites).length}
                    </span>
                  </h2>

              </div>
              <div className='user-profile-section-lists' >
                {favoriteRestaurants()}
              </div>
            </div>

          	</section>
        	</div>
      		</section>
  		);

}




export default User;
