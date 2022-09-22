import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numOfEvents: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numOfEvents: value });
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <div><p>Show
          <input
            type="number"
            className="number-input"
            value={this.state.numOfEvents}
            onChange={this.handleInputChanged} /> Events</p></div>
      </div>
    )
  }
};

export default NumberOfEvents;