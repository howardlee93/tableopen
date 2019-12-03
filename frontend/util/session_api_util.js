import axios from 'axios';


export const postUser = (user) =>{
	return axios({
		url: '/api/users',
		method:'POST',
		data: {user}
	});
};


export const postSession = (user) =>{
	return axios({
		url:'/api/session',
		method:'POST',
		data: {user}
	});
};

export const deleteSession = () =>{
	return axios({
		url:'/api/session',
		method:'DELETE'
	})


}