import Constants from 'constants/app';
import { handleViewAction } from 'fluxx/dispatcher';
import RemoteApi from 'api/remote_api';

const FormActions = {
  addLocation: (location) => {
    handleViewAction({
      type: Constants.Form.ADD_LOCATION,
      location
    });
    RemoteApi.queryTheWeather(location);
  }
};

export default FormActions;
