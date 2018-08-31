import React, { Component } from 'react';
import LabeledInput from './LabeledInput';
import DateList from './DateList';

import './CreateEventForm.css';

class CreateEventForm extends Component{
  constructor(props) {
    super(props);

    this.onSubmit = props.onSubmit;

    this.submitOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    }
  }

  formToJson = (form) => {
    let formData = new FormData(form);
    let jsonParams = {};

    for (const [key, value] of formData.entries()) {
      if (jsonParams[key]) {
        jsonParams[key] = [].concat(jsonParams[key], value)
      } else {
        jsonParams[key] = value;
      }
    }
    return jsonParams;
  }

  handleSubmit = (e) => {
    let options = this.submitOptions;
    let formRef = e.target.parentElement;
    let jsonParams = this.formToJson(formRef);
    options.body = JSON.stringify({ event: jsonParams });
    fetch('http://localhost:3000/events', options)
      .then(this.onSubmit)
  }

  render() {
    return <form action="http://localhost:3000/events" method="POST">
      <LabeledInput name="title" label="Título" />
      <LabeledInput name="description" label="Descripcion" />
      <LabeledInput name="location" label="Lugar" />
      <LabeledInput name="eventImage" label="Imagen" />
      <DateList />
      <input type="button" value="Submit" id="submitBtn" onClick={this.handleSubmit} />
    </form>
  }
}

export default CreateEventForm;