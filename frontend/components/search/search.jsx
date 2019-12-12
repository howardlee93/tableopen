//search.jsx

import React from 'react';

import { withRouter } from 'react-router-dom';



class Search extends React.Component{

	constructor(props){
		super(props);
		this.state = {
      		term: ''
    	};

    	this.handleFormSubmit = this.handleFormSubmit.bind(this);

	}

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.openModal("loading");
        this.props.searchRestaurants(this.state.term)
            .then(() => this.props.closeModal())
            .then(()=>
                this.setState({
                    term: ''
                })
                )
            .then(()=> this.props.history.push("/restaurants"))
    }	

	render(){
		 return (
            <div className = "search-form-container">
                <form onSubmit={e=> this.handleFormSubmit(e)}>
                    <h3> Make a reservation at your favorite restaurant</h3>
                    <input
                    className="search-input"
                    type = 'text'
                    placeholder="Location, Restaurant, or Cuisine"
                    value={this.state.term}
                    onChange = {this.update('term')}
                    />

                  <button type="submit" className="submit-button" onClick={this.handleFormSubmit}>Find a Table </button>
                </form>
            </div>
        );
  	
	}
}

export default withRouter(Search);

