import React, { Component } from 'react';

const google = window.google;

function Map(props) {
  return (
    <div id='map-canvas' style={{ height: '400px', width: '400px' }}>
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
      <div className="container-fluid">
      {console.log(this.state.event)}
        {!(Object.entries(this.state.event).length === 0 && this.state.event.constructor === Object) && (
          <div className="row">
            <div className="col-md-9">
              <div>
                {this.state.event.logo && <img className="thumbnail" src={this.state.event.logo.url} alt="No Image Available" />}
                <h2>{this.state.event.name.text}</h2>
                <p id={this.state.event.id + "_description"}>{this.state.event.description.text}</p>
                <p>Timezone: {this.state.event.start.timezone}</p>
                <p>Start: {this.state.event.start.local}</p>
                <p>End: {this.state.event.end.local}</p>
                <p><em>For more information and bookings, <a href={"https://www.eventbrite.com/event/" + this.state.event.id}>Click Here</a></em></p>
              </div>
            </div>
            <div className="col-md-3">
              <Map />
            </div>
        </div>
        )}
      </div>
    )
  }
}

export default Event;