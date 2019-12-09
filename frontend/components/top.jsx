// top.jsx

import React from 'react';

const Top = () =>{
	topFunction(){
		const topPage = document.getElementById("top-of-page");
		topPage.scrollIntoview({ behavior: 'smooth'});

	}
	render(){
		return(
			<button onClick={this.topFunction}>TOP</button>
			);
	}

};

export default Top;
 