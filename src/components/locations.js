import React, { Component } from 'react';
import LocationsStore from 'fluxx/stores/locations';
import Location from 'components/location';
import classes from './locations.sass';

export default class Locations extends Component {
  constructor() {
    super(...arguments);
    this.state = LocationsStore.getLocations();
    this.onLocationsChanged = this.onLocationsChanged.bind(this);
  }

  componentWillMount() {
    LocationsStore.addChangeListener(this.onLocationsChanged);
  }

  componentWillUnmount() {
    LocationsStore.removeChangeListener(this.onLocationsChanged);
  }

  onLocationsChanged() {
    this.setState(LocationsStore.getLocations());
  }

  render() {
    return (
      <div className={ classes.locations }>
        { this.state.locations.map(location => <Location { ...location } key={ location.uniqId } />) }
      </div>
    );
  }
}
