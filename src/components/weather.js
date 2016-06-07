import React from 'react';
import Form from 'components/form';
import Locations from 'components/locations';

const Weather = ({ addLocation, refresh, remove, locations }) => (
  <div>
    <Form addLocation={ addLocation } />
    <Locations remove={ remove } refresh={ refresh } locations={ locations } />
  </div>
);

export default Weather;
