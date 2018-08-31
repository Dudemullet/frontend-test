import React from 'react';

const HighlightListItem = (props, context) => {
  const {event} = props
  const { id, title, eventImage: image, dates } = event; 

  return <div className="event-element-wrapper">
      <p>highlight - { title }</p>
    </div>;
};

export default HighlightListItem;