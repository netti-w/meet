import React, { Component } from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { WarningAlert } from './Alert';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 10,
      selectedLocation: 'all',
      warningText: ''
    }
  }

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents
    };

    if (location === undefined) {
      location = this.state.selectedLocation
    }

    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);

      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        selectedLocation: location
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          locations: extractLocations(events)
        });
      }
    });

    if (!navigator.onLine) {
      this.setState({
        warningText: "Your're offline! Updating your events won't work in offline mode.",
      });
    } else {
      this.setState({
        warningText: '',
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <WarningAlert text={this.state.warningText} />
        {/* {navigator.onLine && (
          <WarningAlert text={"You're currently offline. Updating your events won't work in offline mode."} />)} */}
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents} />
      </div>
    );
  }
}

export default App;
