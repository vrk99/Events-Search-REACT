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

  componentDidMount(){
    fetch("https://www.eventbriteapi.com/v3/events/search?token=YOUR_EVERBRITE_OAUTH_TOKEN_HERE")
      .then(res => res.json())
      .then(parsedRes => this.updateEvents(parsedRes.events))
      .catch(err => console.log(err))
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