import React from 'react';
import ShareButton from '../ShareButton/ShareButton';
import RedirectButton from './RedirectButton';

import './EventListItem.css';

const EventListItem = (props, context) => {
  const {event} = props
  const { id, title, eventImage: image, dates } = event; 

  const bannerStyle = {
    backgroundImage: 'url(' + image + ')',
    backgroundSize: "cover",
  };

  return <div className="event-list-item-container">

    <section className="event-list-item-banner" style={bannerStyle} >
    </section>

    <section className="event-list-item-content">
      <header className="event-list-item-header">
        <span>{dates[0]}</span>
        <ShareButton title={title} date={dates[0]} />
      </header>

      <main className="event-list-item-main">
        <span>{title}</span>
      </main>

      <footer className="event-list-item-footer">
        <RedirectButton route={`/event/${id}`}>View</RedirectButton>
      </footer>
      </section>
    </div>;
};

export default EventListItem;