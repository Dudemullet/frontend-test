import React from 'react';

const EventObj = (props, context) => {
  const {event} = props;
  const { id,
  title,
  eventImage: image,
  description,
  location,
  dates } = event;

  return <div className="event-element-wrapper">
      <header>
        <span>{dates[0]}</span>
        <a href="#">share</a>
        <p>{title}</p>
      </header>
      <body>
        <img src={image} />
      </body>
      <footer>
        <button>View</button>
      </footer>
    </div>;
};

export default EventObj