import React from 'react';

const EventDetails = (props) => {
  if(!props.event){
    return null;
  }

  const { title, eventImage: image, description, dates, location } = props.event; 

  return <div className="event-element-wrapper">
      <header>
        <p>{ title }</p>
        <span>{ location }</span>
      </header>
      <main>
        <p>{ description } </p>
        <img src={ image } />
      </main>
      <footer>
        <ul>
        {dates.map(date => {
          return <li>{ date }</li>
        })}
        </ul>
      </footer>
    </div>;
};

export default EventDetails;