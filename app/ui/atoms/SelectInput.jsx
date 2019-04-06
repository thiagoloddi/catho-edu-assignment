import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

const style = {
  select: {
    padding: '5px',
    backgroundColor: 'white',
    outline: 'none'
  }
}

const SelectInput = ({ classes, options, className = '', value, onChange }) => {

  return (
    <select onChange={onChange} value={value} className={`${classes.select} ${className}`}>
      {options.map(({ id, label }) => 
        <option key={id} value={id}>{label}</option>
      )}
    </select>
  )
}

SelectInput.propTypes = {
	options: propTypes.arrayOf(propTypes.shape({
		id: propTypes.string.isRequired,
		label: propTypes.string.isRequired
	})).isRequired,
	value: propTypes.string.isRequired,
	onChange: propTypes.func.isRequired,
	className: propTypes.string
};

SelectInput.defaultProps = {
	options: [],
	className: ''
};

export default injectSheet(style)(SelectInput);