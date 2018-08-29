import React from 'react';
import ShareButton from './ShareButton/ShareButton';

const EventObj = (props, context) => {
  const {event} = props
  const { id,
  title,
  eventImage: image,
  description,
  location,
  dates } = event;

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
        <button>View</button>
      </footer>
    </div>;
};

export default EventObj