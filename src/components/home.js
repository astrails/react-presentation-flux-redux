import React from 'react';
import classes from './home.sass';
import HackerNews from 'components/hacker_news';
import Weather from 'components/weather';

const Home = () => (
  <div className={ classes.home }>
    <h2>Useless dashboard, flux version</h2>
    <Weather />
    <HackerNews />
  </div>
);

export default Home;
