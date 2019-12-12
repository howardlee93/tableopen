// slider.js

import React from "react";
import Slider from "react-slick";

import { withRouter } from 'react-router-dom';



class Slide extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			term: ''
		}
		this.handleClick = this.handleClick.bind(this);

	}
	handleClick(e){
		e.preventDefault();
		this.props.openModal("loading");
		let cuisine = e.currentTarget.id;

		clearTimeout(this.timer);
		const taht = this;
		this.timer = setTimeout(function(){
			that.setState({
				term: cuisine
			}, ()=> (
				that.props.searchRestaurants(that.state.term)
				.then(()=> that.props.closeModal()
				).then(()=>
				that.setState({
					term:''
				})
				).then(()=> that.props.history.push("/restaurants"))
				));
		}, 800)
	}

	render(){
		let settings = {
			 dots: true,
		     infinite: true,
		     speed: 3000,
		     autoplay: true,
		     autoplaySpeed: 8000,
		     slidesToShow: 4,
		     slidesToScroll: 1,
		     responsive: [
			      {
			        breakpoint: 1320,
			        settings: {
			          slidesToShow: 3,
			          slidesToScroll: 1
			        }
			      },
			      {
			        breakpoint: 920,
			        settings: {
			          slidesToShow: 2,
			          slidesToScroll: 1,
			        	}
					}
				]
			};
			
		return(
			<Slider className="slider-container cuisine-slide"  {...settings}>
			<div className="slider five" id="french" onClick ={this.handleClick}>
				<p>Best French</p>
        		<p>Restaurateurs Around You</p>
        	</div>

        	<div
		        className="slider one"
		        id="italian"
		        onClick={this.handleClick}>
		        <p>Best Italian</p>
		        <p>Restaurateurs Around You</p>
	       </div>



        	</Slider>
			);
	}
};

export default withRouter(Slide);




