import React, { Component } from 'react';
import DateListItem from './DateListItem';
import DateInput from './DateInput';

class DateList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: []
    }
  }

  handleAddDateClick = (e) => {
    e.preventDefault();
    if(e.value === "") {
      return false;
    }
    let newDate = e.target.previousSibling.value;
    return this.addDate(newDate);
  }

  addDate = (newDate) => {
    this.setState((prevState) => {
      prevState.dates.push(newDate);
      return {
        dates: prevState.dates
      }
    });
  }

  handleRemoveDateClick = (index) => {
    return (e) => {
      e.preventDefault();
      return this.removeDateWithIndex(index);
    }
  }

  removeDateWithIndex = (index) => {
    this.setState( (prevState) => {
      prevState.dates.splice(index, 1);
      let dates = prevState.dates;
      return { dates };
    })
  }

  render() {
    return <ul>
      {this.state.dates.map((date, i) => {
        return <li key={i}>
          <DateListItem defaultValue={date} onClick={this.handleRemoveDateClick(i)}/>
        </li>;
      })}
      <li>
        <DateInput key={this.state.dates.length} />
        <button id="addEvent" onClick={this.handleAddDateClick}> Add date </button>
      </li>
    </ul>
  }
}

export default DateList;