import React from 'react';
import Form from 'components/form';
import Locations from 'components/locations';

import { addLocation } from 'fluxx/actions/form';
import { refresh, remove } from 'fluxx/actions/location';

const Weather = () => (
  <div>
    <Form addLocation={ addLocation } />
    <Locations remove={ remove } refresh={ refresh } />
  </div>
);

export default Weather;
