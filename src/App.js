import React, { Component } from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import { getEvents, extractLocations } from './api';
// import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { WarningAlert } from './Alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 10,
      selectedLocation: 'all',
      warningText: '',
      // showWelcomeScreen: undefined
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  componentDidMount() {
    {
      this.mounted = true;
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events,
            locations: extractLocations(events)
          });
        }
      });
    };

    // async componentDidMount() {
    //   this.mounted = true;
    //   const accessToken = localStorage.getItem('access_token');
    //   const isTokenValid = (await checkToken(accessToken)).error ? false :
    //     true;
    //   const searchParams = new URLSearchParams(window.location.search);
    //   const code = searchParams.get("code");
    //   this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    //   if ((code || isTokenValid) && this.mounted) {
    //     getEvents().then((events) => {
    //       if (this.mounted) {
    //         this.setState({ events, locations: extractLocations(events) });
    //       }
    //     });
    //   };

    if (!navigator.onLine) {
      this.setState({
        warningText: "Your're offline! Updating your events won't work in offline mode.",
      });
    } else {
      this.setState({
        warningText: '',
      });
    };
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    // if (this.state.showWelcomeScreen === undefined) return <div
    //   className="App" />

    return (
      <div className="App">

        <WarningAlert text={this.state.warningText} />
        <h1 className="title">meet App</h1>
        <h4 className="sub-title">Choose events in your nearest city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <div className="data-vis-wrapper">
          {/* <h4>Genre distribution</h4> */}
          <EventGenre events={this.state.events} />
          {/* <h4>Events in each city</h4> */}
          <ResponsiveContainer height={400} >
            <ScatterChart
              margin={{
                top: 40, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#227c9d" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents} />
        {/* <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} /> */}
      </div>
    );
  }
}

export default App;
