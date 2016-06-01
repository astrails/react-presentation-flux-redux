import React, { Component } from 'react';
import FormActions from 'fluxx/actions/form';

export default class Form extends Component {
  static displayName = "Form";

  constructor() {
    super(...arguments);
    this.onSubmit = this.onSubmit.bind(this);
    this.setValue = this.setValue.bind(this);
    this.state = { value: "" };
  }

  onSubmit(e) {
    e.preventDefault();
    FormActions.addLocation(this.state.value);
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
