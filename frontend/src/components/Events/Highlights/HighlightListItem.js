import React from 'react';

const HighlightListItem = (props) => {
  const {event} = props
  const { title, eventImage: image, dates } = event; 

  return <div className="highlight-list-item">
      <p>{ title }</p>
    </div>;
};

export default HighlightListItem;