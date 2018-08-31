import React from 'react';
import EventListItem from './EventListItem';

import './EventList.css';

const EventList = (props, context) => {
  const { events } = props;

  return <ul className="event-list-container">
    {events.map( (event, i) => {
      return <li key={i}>
        <EventListItem event={event} />
      </li>
    })}
  </ul>
}

export default EventList;