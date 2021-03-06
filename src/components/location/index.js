import React, { PropTypes } from 'react';
import classes from './location.sass';

const Location = ({ remove, refresh, status, temperature, icon_url: iconUrl, text, location, uniqId }) => {
  const removeLocation = (e) => {
    e.preventDefault();
    remove(uniqId);
  };

  const refreshLocation = (e) => {
    e.preventDefault();
    refresh(uniqId);
  };

  const renderState = () => {
    if (status !== "ok") {
      return (
        <div className={ classes.state }>{ status }</div>
      );
    }

    const message = `${text} ${temperature}`;

    return (
      <div className={ classes.state }>
        <img src={ iconUrl } alt={ text } />
        <span>{ message }&#8451;</span>
        <a className={ classes.refresh } href="#" onClick={ refreshLocation }>refresh</a>
      </div>
    );
  };

  return (
    <div className={ classes.location }>
      <a className={ classes.remove } href="#" onClick={ removeLocation }>&times;</a>
      <div className={ classes.name }>
        { location }
      </div>
      { renderState() }
    </div>
  );
};

Location.propTypes = {
  remove: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  temperature: PropTypes.number,
  icon_url: PropTypes.string,
  text: PropTypes.string,
  location: PropTypes.string.isRequired,
  uniqId: PropTypes.string.isRequired
};

export default Location;
