import React from 'react';
import Location from 'components/location';
import classes from './locations.sass';

const Locations = ({ locations, refresh, remove }) => {
  const props = { refresh, remove };
  return (
    <div className={ classes.locations }>
      { locations.map(location => <Location { ...props } { ...location } key={ location.uniqId } />) }
    </div>
  );
};

export default Locations;
