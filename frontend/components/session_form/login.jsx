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
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
	};

	componentWillUnmount(){
		this.props.clearErrors();
	}



	static getDerivedStateFromProps(nextProps){
		if(nextProps.loggedIn){
			this.props.history.push(`/`);
		}
	}
	
	// componentDidUpdate(nextProps){
	// 	if(nextProps.loggedIn){
	// 		this.props.history.push(`/`);
	// 	}
	// }

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

	handleDemo(e){
		e.preventDefault();
		this.props.login({email:"guest@mail.com", password:'password'}).then(() => this.props.closeModal());

	}

	renderErrors(){
		return(
			<ul>
			{this.props.errors.map((error, i)=>(
				<li key={`error-${i}`}>
				{error}
				</li>
				))}
			</ul>
			);
	}



	render(){
		return(
			<div className="login-form-box">
				<form className="login-form" onSubmit={e=>this.handleFormSubmit(e)}>
				<div className="login-form login-form-signup">

					<h4> Please sign in</h4>
					{this.renderErrors()}

					<input
						className="login-input"
						type="text"
						value={this.state.email}
						placeholder="Enter email *"
						onChange={this.update('email')}
					/>

					<input
						className="login-input"
						type="password"
						value={this.state.password}
						placeholder="Enter password *"
						onChange={this.update('password')}
					/>

					<button className="session-submit" type="submit">Login</button>
					<button className="session-submit demo-login" onClick={this.handleDemo}>Guest Login</button>
					<p className="changeForm">New to TableOpen?  {this.props.changeForm}</p>
				</div>
				</form>
				<div onClick={this.props.closeModal}> &times;</div>
			</div>
			)
	}	
};

export default withRouter(Login);
