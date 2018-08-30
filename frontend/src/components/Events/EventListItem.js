import React from 'react';
import ShareButton from '../ShareButton/ShareButton';
import RedirectButton from './RedirectButton';

const EventListItem = (props, context) => {
  const {event} = props
  const { id, title, eventImage: image, dates } = event; 

  return <div className="event-element-wrapper">
      <header>
        <span>{dates[0]}</span>
        <ShareButton title={title} date={dates[0]} />
        <p>{title}</p>
      </header>
      <main>
        <img src={image} />
      </main>
      <footer>
        <RedirectButton route={`/event/${id}`}>
          View
        </RedirectButton>
      </footer>
    </div>;
};

export default EventListItem;