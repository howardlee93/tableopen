// restaurant_index_container.js	
import React, {useEffect} from 'react';
import { Route, Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import RestaurantIndexItem from './restaurant_index_item';


function RestaurantIndex(props){
	useEffect(()=>{
		window.scrollTo(0, 0);

	});
	
	const indexEl = () =>{

		if (props.restaurants.length === 0 ){
			return(
				<div className="restaurant-search-error">
          		<div>WE DID NOT FIND A MATCH FOR YOUR SEARCH.</div>
          		<p>Sorry, we couldn't find any results.
          		Try checking your spelling or using less specific keywords.</p>
        		</div>
				);
		}
		return props.restaurants.map((restaurant, i)=> (
			<RestaurantIndexItem key={i} restaurant={restaurant}/>
			));
	}

	return(
		 <section id="main-body">
	        <section className="restaurantList-img-container">
	        </section>
	        <section className="content">
	          <div className="search-container">
	            <SearchContainer />
	          </div>
	          <ul className='restaurant-list'>
	            {indexEl()}
	          </ul>
	        </section>

      	</section>
		);

}



export default RestaurantIndex;




