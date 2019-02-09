import React from 'react'

function EventsGrid(props) {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {props.events.map((event) => (
        <div className="col-md-3 mb-4">
          <div key={event.id} className="card">
            {event.logo && <img className="card-img-top" src={event.logo.url} alt="No Image Available" />}
            <div className="card-body">
              <h5 className="card-title">{event.name.text}</h5>
              <p className="card-text" style={{ maxHeight:'200px', overflowY: 'auto' }}>{event.description.text}</p>
              <a href={event.url} className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      ))}
    </ul>
  )
}

export default EventsGrid;