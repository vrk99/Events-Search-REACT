import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      query: '',
      location: ''
    }
  }

  handleQueryChange = (event) => {
    const searchQuery = event.target.value;
    this.setState(() => ({
      query: searchQuery,
    }))
  }

  handleLocationChange = (event) => {
    const loactionQuery = event.target.value;
    this.setState(() => ({
      location: loactionQuery,
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.enableLoading();
    fetch(`https://www.eventbriteapi.com/v3/events/search?token=YOUR_EVENTBRITE_OAUTH_TOKEN_HERE&q=${this.state.query}&location.address=${this.state.location}`)
      .then(res => res.json())
      .then(parsedRes => this.props.updateEvents(parsedRes.events))
      .catch(err => console.log(err))
  }

  componentDidMount(){
    
  }

  render(){
    return (
      <div className="jumbotron text-center py-4">
        <h2>Find Events Wherever You Want</h2>
        <form onSubmit={this.handleSubmit} style={{ display: 'flex', justifyContent: 'space-around' }} className="m-3 p-0">
          <input type='text' placeholder='What are you looking for?' value={this.state.query} onChange={this.handleQueryChange}></input>
          <input type='text' placeholder='And Where?' value={this.state.location} onChange={this.handleLocationChange}></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;