import React from 'react';
import EventObj from './EventObj';

const EventList = (props, context) => {
  const { events } = props;

  return <ul>
    {events.map( (event, i) => {
      return <li key={i}>
        <EventObj event={event} />
      </li>
    })}
  </ul>
}

export default EventList;