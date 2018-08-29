import React from 'react';
import { withRouter } from "react-router-dom";

const RedirectButton = withRouter(({ history, route, ...props }) => (
  <button type="button" onClick={() => { history.push(route) }}>
    {props.children}
  </button>
));

export default RedirectButton;