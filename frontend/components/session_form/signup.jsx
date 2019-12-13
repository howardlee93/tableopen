import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signup extends React.Component{
	constructor(props){
		super(props);
		this.state={
			email: '',
      		password: '',
      		first_name: '',
      		last_name: '',
      		confirm_password: '',
		}
		this.handleDemo = this.handleDemo.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);

	}


	componentWillUnmount(){
		this.props.clearErrors();
	}


	componentWillReceiveProps(nextProps){
		if(nextProps.loggedIn){
			this.props.history.push(`/`);
		}
	}


	update(field){
		return e=> this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleFormSubmit(e){
		e.preventDefault();
		if (this.state.password != this.state.confirm_password){
			this.props.receiveErrors(['Password doesnt match']);
		}else{
			this.props.signup(this.state)
				.then(payload=>{
					this.props.closeModal();
					this.props.clearErrors();
				});
		}		
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
			<form className="login-form" onSubmit={e=> this.handleFormSubmit(e)}>
				<div className="login-form login-form-signup">

				<h4>Welcome!</h4>
					<input 
						className="login-input"
						type="text"
						value={this.state.first_name}
						placeholder="First name *"
						onChange={this.update('first_name')}
					/>

					<input	
						className="login-input"
						type="text"
						value={this.state.last_name}
						placeholder="Last name *"
						onChange={this.update('last_name')}
					/>

					<input
						className="login-input"
						type="text"
						value={this.state.email}
						placeholder="Email *"
						onChange={this.update('email')}
					/>

					<input
						className="login-input"
						type="password"
						value={this.state.password}
						placeholder="Password *"
						onChange={this.update('password')}
					/>


					<input
											className="login-input"

						type="password"
						value={this.state.confirm_password}
						placeholder="Confirm password *"
						onChange={this.update('confirm_password')}
					/>
					<button type="submit" className="session-submit">Create account</button>
					 <button  onClick={this.handleDemo} className="session-submit">Guest Login</button>
					 <p>Already have a count? {this.props.changeForm}</p>

					 </div>
			</form>

			<div onClick={this.props.closeModal} className="close-x">&times;</div>

			</div>
			)
	}





};


export default withRouter(Signup);
