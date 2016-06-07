import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import locations from 'reduxx/reducers/locations';
import hackerNews from 'reduxx/reducers/hacker_news';

export const buildStore = () => {
  const loggerMiddleware = createLogger();

  const rootReducer = combineReducers({ locations, hackerNews });

  const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(thunkMiddleware, loggerMiddleware),  window.devToolsExtension ? window.devToolsExtension() : f => f)
  );

  return store;
};

