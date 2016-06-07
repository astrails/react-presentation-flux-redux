import Constants from 'constants/app';
import { createReducers } from 'reduxx/reducers/create_reducers';

const LOOKING_OUTSIDE = "Looking outside...";

const DEFAULT_STATE = JSON.parse(localStorage.getItem("locations") || "[]");

const findLocationById = (locations, locationId) => locations.findIndex(l => l.uniqId === locationId);

const updateState = (oldLocations, location, payload) => {
  const locations = [...oldLocations];
  const index = findLocationById(locations, location);
  if (index > -1) {
    locations[index] = { ...locations[index], ...payload };
  }
  return locations;
};

const removeLocation = (oldLocations, location) => {
  const locations = [...oldLocations];
  const index = findLocationById(locations, location);
  if (index > -1) {
    locations.splice(index, 1);
  }
  return locations;
};

const locationFromData = (data) => ({
  location: data.name,
  status: "ok",
  temperature: (data.main.temp - 273).toFixed(),
  text: data.weather[0].main,
  icon_url: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
});

const locations = createReducers(DEFAULT_STATE, {
  [Constants.Form.ADD_LOCATION]: (state, action) => {
    const { location } = action;
    // FIXME: yeah, need a better uniq id
    return [...state, { location, uniqId: location, status: LOOKING_OUTSIDE }];
  },

  [Constants.Location.QUERY_SUCCESS]: (state, action) => updateState(state, action.location, locationFromData(action.data)),

  [Constants.Location.REFRESHING]: (state, action) => updateState(state, action.location, { status: "Refreshing data..." }),

  [Constants.Location.REMOVE]: (state, action) => removeLocation(state, action.location),

  // so what, do your own error handling ;-)
  [Constants.Location.QUERY_FAILED]: (state) => state
});

export default locations;
