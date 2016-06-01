import React, { Component } from 'react';
import classes from './hacker_news.sass';
import NewsEntry from 'components/news_entry';
import HackerNewsStore from 'fluxx/stores/hacker_news';
import HackerNewsActions from 'fluxx/actions/hacker_news';

export default class HackerNews extends Component {
  constructor() {
    super(...arguments);
    this.state = HackerNewsStore.getNews();
    this.onNewsUpdated = this.onNewsUpdated.bind(this);
  }

  componentDidMount() {
    HackerNewsActions.fetch();
  }

  componentWillMount() {
    HackerNewsStore.addChangeListener(this.onNewsUpdated);
  }

  componentWillUnmount() {
    HackerNewsStore.removeChangeListener(this.onNewsUpdated);
  }

  onNewsUpdated() {
    console.log("on news updated", HackerNewsStore.getNews());
    this.setState(HackerNewsStore.getNews());
  }

  render() {
    return (
      <div className={ classes.news }>
        Hacker News:
        { this.state.news.map(entry => <NewsEntry { ...entry } key={ entry.id } />) }
      </div>
    );
  }
}
