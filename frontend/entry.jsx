//entry.jsx


import React from 'react';
import ReactDOM from 'react-dom';

//import fetchRestaurantsAPI from './util/yelp';


import Search from './components/search';
import Display from './components/display';



import axios from 'axios'

const url = "https://api.yelp.com/v3/businesses/search";
const API_KEY = 'E9mCBpSwbqOORvzNJtP30UPRoWMzgumu4-gJCtmA6EC0N14efauMdGRK18vYhVDsn48NbmFKgft0JX10g9Isz1QmAVtE1zNT7mwVW_waimO8XZcdI9WYu9b4h_T2XHYx';

const headers = {
   Authorization: `Bearer ${API_KEY}`

}




class Root extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			query: '',
      		businesses : []
		}

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.fetchRestaurantsAPI = this.fetchRestaurantsAPI.bind(this);
	}


	onFormSubmit(query) {
		console.log(`Querying Yelp for ${query}`);

		 this.setState({query: `${query}`});
		 console.log(`Querying Yelp for ${this.state.businesses}`);
		 this.fetchRestaurantsAPI(query);




  	}


  	 componentDidMount() {
  	 	this.fetchRestaurantsAPI('Cupertino');

  	 
  	 }




 	fetchRestaurantsAPI(query) {


		let params = {
			location: `${query}`, // 'Cupertino'
			//terms: `${query}`,
			limit: 5,
			categories: 'food'
			}

			
		axios.get(`${'https://cors-anywhere.herokuapp.com/'}${url}`, {
			headers, 
			params
			})
			.then((res) => {
				console.log(res);

				this.setState({
          			businesses: res.data.businesses
          		});
          		
			})
			.catch((err) =>{
				console.log('error!!!!!!');
			})

			
	}



	render(){
		return(	
			<div className = 'container'>
			<h1>React is working!</h1>
			<Search onFormSubmit = {this.onFormSubmit}/>
			<Display businesses={this.state.businesses}/>

			</div>
		)
	}
}

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root/>, rootEl);
});