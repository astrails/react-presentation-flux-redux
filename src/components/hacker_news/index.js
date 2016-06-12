import React, { Component, PropTypes } from 'react';
import classes from './hacker_news.sass';
import NewsEntry from 'components/news_entry';

export default class HackerNews extends Component {
  static propTypes = {
    hackerNews: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string
    })),
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <div className={ classes.news }>
        Hacker News:
        { this.props.hackerNews.map(entry => <NewsEntry { ...entry } key={ entry.id } />) }
      </div>
    );
  }
}
