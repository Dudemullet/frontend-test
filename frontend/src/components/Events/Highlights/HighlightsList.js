import React from 'react';
import HighlightListItem from './HighlightListItem';

const HighlightsList = (props, context) => {
  const { events } = props;

  return <ul>
    {events.map( (event, i) => {
      return <li key={i}>
        <HighlightListItem event={event} />
      </li>
    })}
  </ul>
}

export default HighlightsList;