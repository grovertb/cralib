import React from 'react';
import PropTypes from 'prop-types';

function Label({ text }) {
  return (
    <span>Label: {text}</span>
  );
}

Label.propTypes = {
  text: PropTypes.string.isRequired
}

export default Label;

