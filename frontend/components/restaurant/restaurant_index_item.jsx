import React from 'react';
import { Link } from 'react-router-dom';

function restaurantIndexItem(props){
	const getStar =() =>{
		let starCount = props.restaurant.star;
		const star = [];
		for(let i =0; i < starCount; i++){
			stars.push(
				<img
				key={("" + Math.random()).substring(2,7)}
				src="abg"/>
				);
		}
		return  stars;
	}
	let restaurant = props.restaurant;
	let sum = 0;
	for (let i = 0; i <restaurant.ratingArr.length; i++){
		sum += restaurant.ratingArr[i];
	}

	let avgRating;
	if (sum ===  0){
		avgRating = "No ratings yet";
	}else{
		avgRating = (Math.round(sum/restaurant.ratingArr.length *10) / 10).toFixed(1);

	}
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
                  <span className="restaurant-star">{this.getStar()}</span>
              </li>
              <li>Rating: {avgRating}</li>
              <li>Cuisine: {restaurant.cuisine}</li>
              <li>Address: {restaurant.address}, {restaurant.city}, {restaurant.state}, {restaurant.zipcode}</li>
              <li>Contact: {restaurant.phoneNumber}</li>
            </ul>
        </li>

		 </Link>

		)



}

export default restaurantIndexItem;
