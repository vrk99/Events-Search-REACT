import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
import SearchForm from './components/SearchForm';
import EventsGrid from './components/EventsGrid';
import Event from './components/Event';
import Footer from './components/Footer';
import ReactLogo from './logo.svg';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      events: [],
      loading: true,
    }
  }

  componentDidMount(){
    fetch("https://www.eventbriteapi.com/v3/events/search?token=YOUR_EVENTBRITE_OAUTH_TOKEN_HERE")
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
      <BrowserRouter>
        <div className='App'>
          <Route exact path='/' render={props => {
            return (
              <React.Fragment>
                <SearchForm updateEvents={this.updateEvents} enableLoading={this.enableLoading} />
                {this.state.loading ? <Loading /> : <EventsGrid events={this.state.events} />}
                <Footer reactLogo={ReactLogo} />
              </React.Fragment>
            )
          }}>
          </Route>
          <Route path='/event/:event_id' render={props => {
            return (
              <Event event_id={props.match.params.event_id} />
            )
          }}>
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;