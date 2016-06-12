import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import locations from 'reduxx/reducers/locations';
import hackerNews from 'reduxx/reducers/hacker_news';

const allowDebugging = (process.env.NODE_ENV !== 'production') ||
  (localStorage && localStorage.getItem('reactDebug') === 'yes');

export const buildStore = () => {
  const rootReducer = combineReducers({ locations, hackerNews });

  const devToolsExt = (allowDebugging && window.devToolsExtension) ?
    window.devToolsExtension() :
    f => f;

  const middleWare = allowDebugging ?
    applyMiddleware(thunkMiddleware, createLogger()) :
    applyMiddleware(thunkMiddleware);

  const store = createStore(
    rootReducer,
    undefined,
    compose(middleWare, devToolsExt)
  );

  return store;
};

