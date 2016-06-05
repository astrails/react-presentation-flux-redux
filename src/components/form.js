import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  static displayName = "Form";

  static propTypes = {
    addLocation: PropTypes.func.isRequired
  };

  constructor() {
    super(...arguments);
    this.onSubmit = this.onSubmit.bind(this);
    this.setValue = this.setValue.bind(this);
    this.state = { value: "" };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addLocation(this.state.value);
    this.setState({ value: "" });
  }

  setValue() {
    this.setState({ value: this.refs.location.value });
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <input
          type="search"
          placeholder="Enter location"
          ref="location"
          value={ this.state.value }
          onChange={ this.setValue }
        />
      </form>
    );
  }
}
