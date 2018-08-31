import React from 'react';
import EventListContainer from '../components/Events/EventListContainer';
import HighlightsContainer from '../components/Events/Highlights/HighlightsContainer';

const Main = () => (
  <div>
    <h1>Events</h1>
    <EventListContainer />
    <HighlightsContainer />
  </div>
)

export default Main;