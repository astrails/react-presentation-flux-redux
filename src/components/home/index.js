import React from 'react';
import classes from './home.sass';
import HackerNews from 'containers/hacker_news';
import Weather from 'containers/weather';

import { Provider } from 'react-redux';
import { buildStore } from 'reduxx/create_store';

const store = buildStore();

const Home = () => (
  <Provider store={ store }>
    <div className={ classes.home }>
      <h2>Useless dashboard, redux version</h2>
      <Weather />
      <HackerNews />
    </div>
  </Provider>
);

export default Home;
