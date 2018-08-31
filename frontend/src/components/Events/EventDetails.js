import React from 'react';

import './EventDetails.css';

const EventDetails = (props) => {
  if(!props.event){
    return null;
  }

  const { title, eventImage: image, description, dates, location } = props.event; 

  return <div className="event-details-container">

    <section className="event-details-container-banner">
      <img src={image} />
    </section>

    <section className="event-details-container-content">
      <header>
        <h1>{title}</h1>
        <span>{location}</span>
      </header>

      <main>
        <p>{description} </p>
      </main>

      <footer>
        <ul>
          {dates.map(date => {
            return <li>{date}</li>
          })}
        </ul>
      </footer>

    </section>
  </div>;
};

export default EventDetails;