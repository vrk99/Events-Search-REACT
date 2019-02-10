import React from 'react';
import { Link } from 'react-router-dom';

function EventsGrid(props) {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {props.events.map((event) => (
        <div className="col-md-3 mb-4">
          <div key={event.id} className="card">
            {event.logo && <img className="card-img-top" src={event.logo.url} alt="No Image Available" />}
            <div className="card-body">
              <h5 className="card-title">{event.name.text}</h5>
              <p>Timezone: {event.start.timezone}</p>
              <p>Start: {event.start.utc}</p>
              <p>End: {event.end.utc}</p>
              {/* <a href={event.url} className="btn btn-primary">Read More</a> */}
              <Link to={`/event/${event.id}`} className="btn btn-outline-info">Read More</Link>
            </div>
          </div>
        </div>
      ))}
    </ul>
  )
}

export default EventsGrid;