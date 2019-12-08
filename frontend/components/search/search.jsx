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
            <div className = "searchForm">
                <h3> make a reservation</h3>
                <form onSubmit={e=> this.handleFormSubmit(e)}>
                    <label>I am looking for food in: </label>
                    <input 
                    type = 'text'
                    placeholder="Location, Restaurant, or Cuisine"
                    value={this.state.term}
                    onChange = {this.update('term')}
                    />

                  <button type="submit" onClick={this.handleFormSubmit}>Find a Table </button>
                </form>
            </div>
        );
  	
	}
}

export default withRouter(Search);

