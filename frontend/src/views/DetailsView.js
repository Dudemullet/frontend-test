import React from 'react';
import { Link } from "react-router-dom";
import EventDetailsContainer from '../components/Events/EventDetailsContainer';

const DetailsView = ({ match }) => (
  <div>
    <h1>
      <Link to="/">Back</Link>
      Events
    </h1>
    <main>
      <EventDetailsContainer eventId={match.params.id} />
    </main>
  </div>
)

export default DetailsView;