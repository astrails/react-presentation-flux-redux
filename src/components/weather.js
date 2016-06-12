import React, { PropTypes } from 'react';
import Form from 'components/form';
import Locations from 'components/locations';

const Weather = ({ addLocation, refresh, remove, locations }) => (
  <div>
    <Form addLocation={ addLocation } />
    <Locations remove={ remove } refresh={ refresh } locations={ locations } />
  </div>
);

Weather.propTypes = {
  addLocation: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(PropTypes.shape({
    status: PropTypes.string.isRequired,
    temperature: PropTypes.number,
    icon_url: PropTypes.string,
    text: PropTypes.string,
    location: PropTypes.string.isRequired,
    uniqId: PropTypes.string.isRequired
  }))
};

export default Weather;
