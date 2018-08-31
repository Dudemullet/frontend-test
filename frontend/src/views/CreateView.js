import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CreateEventForm from '../components/Form/CreateEventForm';

class CreateView extends Component {
  constructor(props) {
    super(props);
    this.sendTo = () => { 
      return props.history.push('/');
    };
  }

  render() {
    return <div>
      <h1>
        <Link to="/">Back</Link>
        New Event
        </h1>
      <main>
        <CreateEventForm onSubmit={this.sendTo} />
      </main>
    </div>;
  }
}

export default CreateView;