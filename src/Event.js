import React, { Component } from 'react';

class Event extends Component {
  state = {
    show: false
  };

  toggleEventDetails = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    const { event } = this.props
    return (
      <div className="event">
        <h2 className="event-title">{event.summary}</h2>
        <div className="event-info">
          <p>{event.start.dateTime}, {event.start.timeZone}, in {event.location}</p>
        </div>
        {this.state.show && (
          <div className="event-details">
            <p>About the event: {event.description}</p>
          </div>
        )}
        {!this.state.show ? (
          <button className="event-showDetails-btn" onClick={this.toggleEventDetails} >Show details</button>
        ) : (
          <button className="event-hideDetails-btn" onClick={this.toggleEventDetails} >Hide details</button>
        )}
      </div>
    )
  }
}

export default Event;