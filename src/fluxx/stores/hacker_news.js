import Constants from 'constants/app';
import dispatcher from 'fluxx/dispatcher';
import createStore from 'fluxx/stores/create_store';

const news = {};
let newsIds = [];

const HackerNewsStore = createStore({
  getNews() {
    return { news: newsIds.map(id => ({ ...(news[id] || {}), id })) };
  }
});

HackerNewsStore.dispatchToken = dispatcher.register(payload => {
  const action = payload.action;

  switch (action.type) {
    case Constants.HackerNews.TOP_IDS_LOADED:
      newsIds = action.ids;
      return HackerNewsStore.emitChange();

    case Constants.HackerNews.STORY_FETCHED:
      news[action.id] = action.data;
      return HackerNewsStore.emitChange();

    default:
      return true;
  }
});


export default HackerNewsStore;
