import React from 'react';



const restaurantBox = {
	borderRadius: '5px',
	boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
	transition:' 0.3s',
	backgroundColor: 'grey'


}



/* Add some padding inside the card container */
const restaurantInfo =  {
  padding: '2px 16px',
}




class Display extends React.Component{
	constructor(props){
		super(props);

	}




	render(){
		const {businesses} = this.props;

		return (
			<div>
      		{businesses.map((business) => {  
      			return(
      				<div key={business.id} className={restaurantBox}>
        				<img src={business.image_url} height='30%' width='30%'></img>
        				<div className={restaurantInfo}>
	      					<h5>{business.name}</h5>
	        				<h5>{business.rating}</h5>
				             <h5>{business.display_phone}</h5>
							<h5>{business.location.display_address}</h5>
				 			<a href={business.url}> Website</a>
			 			</div>
			 			
			      	</div>
  					);
      			})
      		}
 
      		</div>
      		)
		}
}


// const Display = ({ businesses }) => {
//   return (
//     <div className="movielist">
//       <div className="movie">
//         <div className="movieTitle">
//           <h5>Name</h5>
//         </div>
//         <div className="movieCol">
//           <h5>  Rating</h5>
//         </div>
//         <div className="movieCol">
//           <h5>Contact</h5>
//         </div>
//       </div>
//       {businesses.map(business => <Restaurants business={business} key={business.id} />)}
//     </div>
//   );
// };




// const Restaurants = ({ business }) => {
//   return (
//     <div className="movie">
//       <div className="movieTitle">
//         {business.name}
//       </div>
//       <div className="movieCol">
//         {business.rating}
//       </div>
//       <div className="movieCol">
//         {business.display_phone}
//       </div>
//       <div className="restaurantLink">
//       <a href= {business.url}>Link to {business.name}</a>
//       </div>
//     </div>
//   );
// };

export default Display;







