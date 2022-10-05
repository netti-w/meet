import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  constructor() {
    super();
    this.state = {
      numberOfEvents: 10,
    }
  }

  handleInputChanged = (event) => {
    const value = event.target.value;

    if (event.target.value <= 0) {
      this.setState({
        numberOfEvents: value,
        errorText: 'Please enter a number greater than 0, so you see a list of events.',
      })
    }
    else {
      this.props.updateEvents(undefined, event.target.value);
      this.setState({
        numberOfEvents: value,
        errorText: '',
      });
    }
  }

  render() {

    return (
      <div className="NumberOfEvents">
        <div><p>Show <input
          type="number"
          className="number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged} /> Events</p>
          <div>
            <ErrorAlert text={this.state.errorText} />
          </div>

        </div>
      </div>
    )
  }
};

export default NumberOfEvents;