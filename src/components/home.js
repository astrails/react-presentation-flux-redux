import React from 'react';
import Form from 'components/form';
import Locations from 'components/locations';
import classes from './home.sass';
import HackerNews from 'components/hacker_news';

const Home = () => (
  <div className={ classes.home }>
    <h2>Useless dashboard, flux version</h2>
    <Form />
    <Locations />
    <HackerNews />
  </div>
);

export default Home;
