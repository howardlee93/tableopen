//search.jsx

import React from 'react';



class Search extends React.Component{

	constructor(props){
		super(props);
		this.state = {
      		term: '',
    	};
    	this.handleSearchChange = this.handleSearchChange.bind(this);
    	this.handleFormSubmit = this.handleFormSubmit.bind(this);


	}


    handleSearchChange(e) {
        this.setState({
            term: e.target.value
        });
    }

    handleFormSubmit (e) {
        const {onFormSubmit} = this.props;
        const { term } = this.state;

        e.preventDefault();
        
        onFormSubmit(term);


    }	

	render(){
		 return (
            <div className = "searchForm">
                {/*add an event listener of form submit so the state only get set when the form is submitted*/}
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <label 
                    >I am looking for food in: </label>
                    <input 
                    type = 'text'
                    placeholder = 'enter ZIP, city, neighberhood, state, or address'
                    value = {this.state.term}
                    onChange = {this.handleSearchChange}
                    />
                    <button type = 'submit' > Go! </button>
                </form>
            </div>
        );
  	
	}
}

export default Search;
