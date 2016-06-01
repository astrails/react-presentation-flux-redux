import Constants from 'constants/app';
import { handleServerAction, handleViewAction } from 'fluxx/dispatcher';
import RemoteApi from 'api/remote_api';

const LocationActions = {
  refresh: (location) => {
    handleViewAction({ type: Constants.Location.REFRESHING, location });
    RemoteApi.queryTheWeather(location);
  },

  querySuccess: (data, location) => {
    handleServerAction({
      type: Constants.Location.QUERY_SUCCESS,
      data,
      location
    });
  },

  queryFailed: (error) => {
    handleServerAction({
      type: Constants.Location.QUERY_FAILED,
      error
    });
  },

  remove: (locationID) => {
    handleViewAction({ type: Constants.Location.REMOVE, locationID });
  }
};

export default LocationActions;
