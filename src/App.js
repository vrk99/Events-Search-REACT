import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      events: [],
      loading: true,
    }
  }

  updateEvents = (events) => {
    this.setState(() => ({
      events: events
    }))
  }

  render() {
    return (
      <div className="App">
        <SearchForm updateEvents={this.updateEvents} />
      </div>
    );
  }
}

export default App;