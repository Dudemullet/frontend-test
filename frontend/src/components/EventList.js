import React from 'react';
import EventObj from './EventObj';

const EventList = (props, context) => {
  const { events } = props;

  return <ul>
    {events.map( (event, i) => {
      return <li>
        <EventObj event={event} id={i} />
      </li>
    })}
  </ul>
}

export default EventList;