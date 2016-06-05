import SuperAgent from 'superagent';
import { storyFetched } from 'fluxx/actions/hacker_news';
import APIKEY from 'config/apikey';
import { querySuccess, queryFailed } from 'fluxx/actions/location';

const isSuccess = (res) => (res && res.statusCode && [200, 201].indexOf(res.statusCode) !== -1);

const RemoteApi = {
  queryTheWeather: (location) => {
    SuperAgent.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKEY}`).set('Accept', 'application/json').
      end((error, res) => {
        if (isSuccess(res)) {
          setTimeout(() => {
            querySuccess(res.body, location);
          }, 500);
        } else {
          queryFailed(res);
        }
      });
  },

  fetchTopStories: (onSuccess) => {
    SuperAgent.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').
      end((error, res) => {
        if (isSuccess(res)) {
          onSuccess(res.body);
        } else {
          // TODO handle error
        }
      });
  },

  fetchStory: (id) => {
    SuperAgent.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).
      end((error, res) => {
        if (isSuccess(res)) {
          storyFetched(id, res.body);
        } else {
          // TODO handle error
        }
      });
  }
};

export default RemoteApi;
