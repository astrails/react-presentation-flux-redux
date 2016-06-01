import React, { Component } from 'react';
import classes from './location.sass';
import LocationActions from 'fluxx/actions/location';

export default class Location extends Component {
  constructor() {
    super(...arguments);
    this.removeLocation = this.removeLocation.bind(this);
    this.refreshLocation = this.refreshLocation.bind(this);
  }

  removeLocation(e) {
    e.preventDefault();
    LocationActions.remove(this.props.uniqId);
  }

  refreshLocation(e) {
    e.preventDefault();
    LocationActions.refresh(this.props.uniqId);
  }

  renderState() {
    if (this.props.status !== "ok") {
      return (
        <div className={ classes.state }>{ this.props.status }</div>
      );
    }

    const message = `${this.props.text} ${this.props.temperature}`;

    return (
      <div className={ classes.state }>
        <img src={ this.props.icon_url } alt="this.props.text" />
        <span>{ message }&#8451;</span>
        <a className={ classes.refresh } href="#" onClick={ this.refreshLocation }>refresh</a>
      </div>
    );
  }

  render() {
    return (
      <div className={ classes.location }>
        <a className={ classes.remove } href="#" onClick={ this.removeLocation }>&times;</a>
        <div className={ classes.name }>
          { this.props.location }
        </div>
        { this.renderState() }
      </div>
    );
  }
}
