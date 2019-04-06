import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

const buttonStyle = {
  button: {
      color: 'white',
      border: 'none',
      outline: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      backgroundColor: '#81D2AE',
      fontWeight: 'bold',
      borderRadius: '10px',
      minWidth: '100px'
  }
};

const Button = ({ label, onClick, className, classes, type }) => {
  return (
    <button onClick={onClick} className={`${classes.button} ${className}`} type={type}>
      {label}
    </button>
  );
}

Button.propTypes = {
	onClick: propTypes.func.isRequired,
	label: propTypes.string,
	className: propTypes.string,
	type: propTypes.string
};

Button.defaultProps = {
	type: 'button',
	className: '',
	label: ''
};

export default injectSheet(buttonStyle)(Button);