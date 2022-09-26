import React, { Component } from 'react';

class NumberOfEvents extends Component {

  constructor() {
    super();
    this.state = {
      numberOfEvents: 10
    }
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(undefined, event.target.value);
    this.setState({ numberOfEvents: value });
  }

  render() {

    return (
      <div className="NumberOfEvents">
        <div><p>Show <input
          type="number"
          className="number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged} /> Events</p></div>
      </div>
    )
  }
};

export default NumberOfEvents;