import React, { PropTypes } from 'react';

const NewsEntry = ({ id, title }) => {
  if (title) {
    return (
      <div>
        <a href={ `https://news.ycombinator.com/item?id=${id}` } target="_blank">{ title }</a>
      </div>
    );
  }

  return (
    <div>Loading entry data...</div>
  );
};

NewsEntry.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string
};

export default NewsEntry;
