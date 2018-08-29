import React from 'react';
import { Link } from "react-router-dom";

const DetailsView = (props) => (
  <div>
    <h1>
      <Link to="/">Back</Link>
      Events
    </h1>
    <main>
      I'm event details
    </main>
  </div>
)

export default DetailsView;