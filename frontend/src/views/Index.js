import React from 'react';
import { Link } from "react-router-dom";
import EventListContainer from '../components/Events/EventListContainer';
import HighlightsContainer from '../components/Events/Highlights/HighlightsContainer';
import Header from '../components/Header';

import './index.css';

const Main = () => (
  <React.Fragment>
    <Header />

    <main className="app-main-grid">
      <section className="app-main-grid-item">
        <EventListContainer />
      </section>
      <section className="app-main-grid-item">
        <HighlightsContainer />
      </section>
    </main>

    <footer>
      <Link to="/create" >Create event</Link>
    </footer>
  </React.Fragment>
)

export default Main;