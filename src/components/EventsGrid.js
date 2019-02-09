import React from 'react'

function EventsGrid(props) {
  return (
    <div>
      {props.events.map((event) => (
        <div style={{ width: '50%', display: 'inline-block', }}>
          <ul key={event.id}>
            <li><h4>{event.name.text}</h4></li>
            <l1><img src={event.logo.url} /></l1>
            <li><p>{event.description.text}</p></li>
            <li><a href={event.url}>Read More</a></li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default EventsGrid;