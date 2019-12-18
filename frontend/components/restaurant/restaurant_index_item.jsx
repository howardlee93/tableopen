import React from 'react';
import { Link } from 'react-router-dom';


function restaurantIndexItem(props){
	let restaurant = props.restaurant;

	return(
		 <Link to={`/restaurants/${restaurant.id}`}>
		 <li className="restaurant-list-section">
            <div className="restaurant-logo-container">
              <img
                className="restaurant-logo"
                src={restaurant.logo}/>
            </div>
            <ul className="restaurant-detail-ul">
              <li className="restaurant-name">
                  <h5>{restaurant.name}</h5>
                 <span className="restaurant-star"></span>
	              </li>
	              <li>Cuisine: {restaurant.cuisine}</li>
              <li>Address: {restaurant.address}, {restaurant.city}, {restaurant.state}, {restaurant.zipcode}</li>
              <li>Contact: {restaurant.phoneNumber}</li>
            </ul>
        </li>

		</Link>

		)



}

export default restaurantIndexItem;
