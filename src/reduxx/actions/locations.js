import Constants from 'constants/app';
import RemoteApi from 'api/remote_api';

const querySuccess = (data, location) => ({ type: Constants.Location.QUERY_SUCCESS, data, location });

const queryFailed = (error) => ({ type: Constants.Location.QUERY_FAILED, error });

const startAddingLocation = (location) => ({ type: Constants.Form.ADD_LOCATION, location });

export const addLocation = (location) => (dispatch) => {
  dispatch(startAddingLocation(location));
  RemoteApi.queryTheWeather({
    payload: { location },
    onSuccess: (data) => {
      dispatch(querySuccess(data, location));
    },
    onFailure: (error) => {
      dispatch(queryFailed(error));
    }
  });
};

const startRefershing = (location) => ({ type: Constants.Location.REFRESHING, location });

export const refresh = (location) => (dispatch) => {
  dispatch(startRefershing(location));
  RemoteApi.queryTheWeather({
    payload: { location },
    onSuccess: (data) => {
      dispatch(querySuccess(data, location));
    },
    onFailure: (error) => {
      dispatch(queryFailed(error));
    }
  });
};

export const remove = (location) => ({ type: Constants.Location.REMOVE, location });
