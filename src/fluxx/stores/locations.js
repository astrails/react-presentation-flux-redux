import Constants from 'constants/app';
import dispatcher from 'fluxx/dispatcher';
import createStore from 'fluxx/stores/create_store';

const locations = JSON.parse(localStorage.getItem("locations") || "[]");

const findLocationById = (locationId) => locations.findIndex(l => l.uniqId === locationId);

const updateLocation = (locationId, data) => {
  const index = findLocationById(locationId);
  if (index > -1) {
    locations[index] = {
      ...locations[index],
      location: data.name,
      status: "ok",
      temperature: (data.main.temp - 273).toFixed(),
      text: data.weather[0].main,
      icon_url: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    };
  }
};

const removeLocation = (locationId) => {
  const index = findLocationById(locationId);
  if (index > -1) {
    locations.splice(index, 1);
  }
};

const updateState = (locationId, status) => {
  const index = findLocationById(locationId);
  if (index > -1) {
    locations[index].status = status;
  }
};

const LocationsStore = createStore({
  getLocations() {
    return { locations: [...locations] };
  }
});

const saveChanges = () => {
  localStorage.setItem("locations", JSON.stringify(locations));
  return LocationsStore.emitChange();
};

LocationsStore.dispatchToken = dispatcher.register(payload => {
  const action = payload.action;

  switch (action.type) {
    case Constants.Form.ADD_LOCATION:
      // FIXME: yeah, need a better uniq id
      locations.push({
        location: action.location,
        status: "Looking outside...",
        uniqId: action.location
      });
      return LocationsStore.emitChange();

    case Constants.Location.QUERY_SUCCESS:
      updateLocation(action.location, action.data);
      return saveChanges();

    case Constants.Location.REMOVE:
      removeLocation(action.locationID);
      return saveChanges();

    case Constants.Location.REFRESHING:
      updateState(action.location, "Refreshing data...");
      return saveChanges();

    default:
      return true;
  }
});

export default LocationsStore;
