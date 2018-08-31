import React, { Component } from 'react';
import DateInput from './DateInput';

class DateListItem extends Component {
  render() {
    return <React.Fragment>
      <DateInput name="dates" defaultValue={this.props.defaultValue}/>
      <button className="removeDateBtn" onClick={this.props.onClick}> - </button>
    </React.Fragment>
  }
}

export default DateListItem;