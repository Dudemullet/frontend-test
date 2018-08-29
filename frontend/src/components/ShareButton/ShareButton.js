import React from 'react';
import { default as Twitter } from './TwitterShareButton';

const ShareButton = (props, context) => {

  const shareMsg = encodeURI(`I'm going to ${props.title} @ ${props.date}`);

  return <div>
    <a href="#">Share</a>
    <Twitter msg={shareMsg} />
  </div>
};

export default ShareButton;