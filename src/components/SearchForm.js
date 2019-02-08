import React, {Component} from 'react';

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
    
  }

  componentDidMount(){
    
  }

  render(){
    return (
      <div>
        <h2>Find Events Wherever You Want</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='What are you looking for?' value={this.state.query} onChange={this.handleQueryChange}></input>
          <input type='text' placeholder='And Where?' value={this.state.location} onChange={this.handleLocationChange}></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;