import React, { PropTypes } from 'react';
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

Locations.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    status: PropTypes.string.isRequired,
    temperature: PropTypes.number,
    icon_url: PropTypes.string,
    text: PropTypes.string,
    location: PropTypes.string.isRequired,
    uniqId: PropTypes.string.isRequired
  })),
  refresh: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default Locations;
