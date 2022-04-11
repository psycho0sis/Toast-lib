import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export function Button({ text, disabled, type, addToast }) {
  return (
    <button
      onClick={addToast ? addToast(type) : null}
      className="button"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: "Click me", 
  tyope: "Success",
  disabled: false
};