import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
  let link;
  if(props.linkHome) {
    link = <React.Fragment>
        <Link to="/">
          <span>⏮</span>
        </Link>
      </React.Fragment>;
  }
  return <header className="app-header">
      <section className="app-header-container">
        {link}
        <h1>
          {props.label || "Events"}
        </h1>
      </section>
    </header>;
}

export default Header;