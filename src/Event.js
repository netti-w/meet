import React, { Component } from 'react';

class Event extends Component {
  state = {
    show: false
  };

  toggleEventDetails = () => {
    this.setState({ show: !this.state.show })
  }

  getDate = (string, zone) => {
    let date = new Date(string);
    let dateString = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(date);
    return dateString;
  }

  render() {
    const { event } = this.props
    return (
      <div className="event">
        <h2 className="event-title">{event.summary}</h2>
        <div className="event-info">
          <h4>{this.getDate(event.start.dateTime, event.start.timeZone)}, in {event.location}</h4>
        </div>
        {this.state.show && (
          <div className="event-details">
            <h4>About the event:</h4>
            <p>{event.description}</p>
          </div>
        )}
        <div className="event-button">
          {!this.state.show ? (
            <button className="event-showDetails-btn" onClick={this.toggleEventDetails} >Show details</button>
          ) : (
            <button className="event-hideDetails-btn" onClick={this.toggleEventDetails} >Hide details</button>
          )}
        </div>
      </div>
    )
  }
}

export default Event;