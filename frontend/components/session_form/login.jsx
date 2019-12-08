//login.jsx

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			email: '',
			password:''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this;

	};

	update(field){
		return e=> this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleFormSubmit(e){
		e.preventDefault();
		this.props.login(this.state)
			.then(  payload => {
				this.props.closeModal();
				this.props.clearErrors();
			}
		);
	}




	render(){
		return(
			<div>
				<form onSubmit={e=>this.handleFormSubmit(e)}>
					<h4> Please sign in</h4>

					<input
					type="text"
					value={this.state.email}
					placeholder="Enter email *"
					onChange={this.update('email')}
					/>

					<input
						type="password"
						value={this.state.password}
						placeholder="Enter password *"
						onChange={this.update('password')}
					/>
					<button type="submit">Login</button>
				</form>
			</div>
			)
	}	
};

export default withRouter(Login);
