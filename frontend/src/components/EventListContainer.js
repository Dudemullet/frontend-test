import React, { Component } from 'react';
import EventList from './EventList';

class EventListContainer extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/events')
      .then(res => res.json())
      .then(res => {
        console.log(res.events);
        return this.setState({ events:res.events });
      })
  }

  render() {
    return <EventList events={ this.state.events } />;
  }
}

export default EventListContainer;