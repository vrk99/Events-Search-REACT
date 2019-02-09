import React, { Component } from 'react';
import './App.css';
import Loading from './components/Loading';
import SearchForm from './components/SearchForm';
import EventsGrid from './components/EventsGrid';

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
      loading: false,
      events: events,
    }))
  }

  enableLoading = () => {
    this.setState(() => ({
      loading: true,
    }))
  }

  render() {
    return (
      <div className="App">
        <SearchForm updateEvents={this.updateEvents} enableLoading={this.enableLoading} />
        {this.state.loading ? <Loading /> : <EventsGrid events={this.state.events} />}
      </div>
    );
  }
}

export default App;