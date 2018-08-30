import React from 'react';
import { default as Twitter } from './TwitterShareButton';

const SharePopupMenu = ({ message }) => {
  return <ul>
    <li> <Twitter msg={encodeURI(message)} /> </li>
  </ul>
};

export default SharePopupMenu;
