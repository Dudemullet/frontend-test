import React, { Component } from 'react';
import EventDetails from './EventDetails';

class EventDetilsContainer extends Component {
  constructor({ eventId }) {
    super();
    this.state = {
      event: null
    }
    this.eventId = eventId;
  }

  componentDidMount() {
    fetch(`http://localhost:3000/events/${this.eventId}`)
      .then(res => res.json())
      .then(res => {
        console.log(res.event);
        return this.setState({ event: res.event });
      })
  }

  render() {
    return <EventDetails event={this.state.event} />;
  }
}

export default EventDetilsContainer;