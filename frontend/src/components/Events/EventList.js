import React from 'react';
import EventListItem from './EventListItem';

const EventList = (props, context) => {
  const { events } = props;

  return <ul>
    {events.map( (event, i) => {
      return <li key={i}>
        <EventListItem event={event} />
      </li>
    })}
  </ul>
}

export default EventList;