import React from 'react';
import HighlightListItem from './HighlightListItem';
import Header from '../../Header';

import './HighlightsList.css';

const HighlightsList = (props, context) => {
  const { events } = props;

  return <React.Fragment>
    <Header label="Highlights" />
    <ul className="highlights-list-container">
      {events.map( (event, i) => {
        return <li key={i}>
          <HighlightListItem event={event} />
        </li>
      })}
    </ul>
  </React.Fragment>
}

export default HighlightsList;