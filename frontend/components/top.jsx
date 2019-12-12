// top.jsx

import React from 'react';

const Top = () =>{
	const topFunction = () =>{
		const topPage = document.getElementById("top-of-page");
		topPage.scrollIntoview({ behavior: 'smooth'});
	}
	
	return(
		<button onClick={this.topFunction}>TOP</button>
	);
	
};

export default Top;
 