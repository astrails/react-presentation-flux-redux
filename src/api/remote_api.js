import SuperAgent from 'superagent';
import APIKEY from 'config/apikey';

const isSuccess = (res) => (res && res.statusCode && [200, 201].indexOf(res.statusCode) !== -1);

const RemoteApi = {
  queryTheWeather: ({ payload: { location }, onSuccess, onFailure }) => {
    SuperAgent.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKEY}`).set('Accept', 'application/json').
      end((error, res) => {
        if (isSuccess(res)) {
          setTimeout(() => {
            onSuccess(res.body);
          }, 500);
        } else {
          onFailure(res);
        }
      });
  },

  fetchTopStories: ({ onSuccess /* , onFailure */ }) => {
    SuperAgent.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').
      end((error, res) => {
        if (isSuccess(res)) {
          onSuccess(res.body);
        } else {
          // TODO handle error
        }
      });
  },

  fetchStory: ({ payload: { id }, onSuccess /* , onFailure */ }) => {
    SuperAgent.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).
      end((error, res) => {
        if (isSuccess(res)) {
          onSuccess(res.body);
        } else {
          // TODO handle error
        }
      });
  }
};

export default RemoteApi;
