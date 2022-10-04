import React, { Component } from 'react';
import { ErrorAlert, WarningAlert } from './Alert';

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
        errorText: 'Please enter a number greater than 0, so you see events',
        // warningText: '',
      })
    }
    // else if (event.target.value > 40) {
    //   this.setState({
    //     numberOfEvents: value,
    //     warningText: 'Searching for more than 40 events may cause the app a longer time to display the results.',
    //     errorText: '',
    //   })
    // }
    else {
      this.props.updateEvents(undefined, event.target.value);
      this.setState({
        numberOfEvents: value,
        errorText: '',
        // warningText: '',
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
            {/* <WarningAlert text={this.state.warningText} /> */}
          </div>

        </div>
      </div>
    )
  }
};

export default NumberOfEvents;