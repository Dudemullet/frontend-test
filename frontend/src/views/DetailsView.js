import React from 'react';
import { Link } from "react-router-dom";
import EventDetailsContainer from '../components/Events/EventDetailsContainer';
import Header from '../components/Header';

const DetailsView = ({ match }) => (
  <div>
    <Header linkHome="true" />
    <main>
      <EventDetailsContainer eventId={match.params.id} />
    </main>
  </div>
)

export default DetailsView;