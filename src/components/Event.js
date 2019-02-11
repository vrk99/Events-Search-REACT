import React, { Component } from 'react';

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {},
      eventLocation: {}
    }
  }

  componentDidMount() {
    fetch("https://www.eventbriteapi.com/v3/events/" + this.props.event_id + "?token=YOUR_EVENTBRITE_OAUTH_TOKEN_HERE")
      .then(res => res.json())
      .then(event => {
        this.setState(() => ({ event }));
        console.log(this.state.event.venue_id)
        fetch("https://www.eventbriteapi.com/v3/venues/" + this.state.event.venue_id + "?token=YOUR_EVENTBRITE_OAUTH_TOKEN_HERE")
          .then(res => res.json())
          .then(eventLocation => this.setState(() => ({ eventLocation })))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {console.log(this.state.event)}
        {console.log(this.state.eventLocation)}
      </div>
    )
  }
}

export default Event;