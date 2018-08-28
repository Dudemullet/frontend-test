import React from 'react';

const EventList = (props, context) => {
  const { events } = props;

  return <ul>
    {events.map(event => {

      // Prop destructuring
      const { id,
        title,
        eventImage: image,
        description,
        location,
        dates } = event;

      return <li>
        <div>
          <header>
            <a href="#{id}">{title}</a>
          </header>
          <p>{description}</p>
        </div>
      </li>
    })}
  </ul>
}

export default EventList;