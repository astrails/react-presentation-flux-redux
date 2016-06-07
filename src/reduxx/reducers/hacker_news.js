import Constants from 'constants/app';
import { createReducers } from 'reduxx/reducers/create_reducers';

const DEFAULT_STATE = { news: {}, newsIds: [] };

const hackerNews = createReducers(DEFAULT_STATE, {
  [Constants.HackerNews.TOP_IDS_LOADED]: (state, action) => ({ ...state, newsIds: action.ids }),
  [Constants.HackerNews.STORY_FETCHED]: (state, action) => ({ ...state, news: { ...state.news, [action.id]: action.data } })
});

export default hackerNews;
