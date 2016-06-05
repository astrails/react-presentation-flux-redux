import Constants from 'constants/app';
import { handleServerAction, handleViewAction } from 'fluxx/dispatcher';
import RemoteApi from 'api/remote_api';

export const refresh = (location) => {
  handleViewAction({ type: Constants.Location.REFRESHING, location });
  RemoteApi.queryTheWeather(location);
};

export const remove = (locationID) => {
  handleViewAction({ type: Constants.Location.REMOVE, locationID });
};

export const querySuccess = (data, location) => {
  handleServerAction({
    type: Constants.Location.QUERY_SUCCESS,
    data,
    location
  });
};

export const queryFailed = (error) => {
  handleServerAction({
    type: Constants.Location.QUERY_FAILED,
    error
  });
};

