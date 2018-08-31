import React from 'react';
import { Link } from "react-router-dom";
import EventListContainer from '../components/Events/EventListContainer';
import HighlightsContainer from '../components/Events/Highlights/HighlightsContainer';

const Main = () => (
  <div>
    <h1>Events</h1>
    <EventListContainer />
    <HighlightsContainer />
    
    <Link to="/create" >Create event</Link>
  </div>
)

export default Main;