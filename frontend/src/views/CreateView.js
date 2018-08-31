import React, { Component } from 'react';
import CreateEventForm from '../components/Form/CreateEventForm';
import Header from '../components/Header';

class CreateView extends Component {
  constructor(props) {
    super(props);
    this.sendTo = () => { 
      return props.history.push('/');
    };
  }

  render() {
    return <div>
      <Header linkHome="true" label="New Event" />
      <main>
        <CreateEventForm onSubmit={this.sendTo} />
      </main>
    </div>;
  }
}

export default CreateView;