import React, { Component } from 'react';

const google = window.google;

function Map(props) {
  return (
    <div id='map-canvas' style={{ height: '500px', width: '500px' }}>
    </div>
  )
}

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
          .then(eventLocation => {
            this.setState(() => ({ eventLocation }));
            const latitude = parseFloat(this.state.eventLocation.address.latitude), longitude = parseFloat(this.state.eventLocation.address.longitude);
            const location = { lat: latitude, lng: longitude }
            var map = new google.maps.Map(document.getElementById('map-canvas'), {
              zoom: 12,
              center: location,
            });
            const marker = new google.maps.Marker({
              position: location,
              map: map,
              label: this.state.eventLocation.name,
            })
            this.forceUpdate();
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Map />
      </div>
    )
  }
}

export default Event;