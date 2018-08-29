import React from 'react';

const TwitterShareButton = ({msg}) => (
  <a href={`https://twitter.com/intent/tweet?text=${msg}`}>Tweet this event</a>
);

export default TwitterShareButton;