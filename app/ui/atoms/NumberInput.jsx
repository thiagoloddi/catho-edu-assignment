import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

const NumberInput = ({ classes, value, id, onChange, onClick, onBlur }) => {
  return (
    <div className={classes.container}>
      <img onClick={onClick} id="minus"className={classes.img} src="/assets/minus.svg"/>
      <input id={id} value={value} onChange={onChange} onBlur={onBlur} className={classes.input}/>
      <img onClick={onClick} id="plus"className={classes.img} src="/assets/plus.svg"/>
    </div>
  )
}

const style = {
  container: {
    height: '100',
    '& > *': {
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  },
  img: {
    height: '15px',
    width: '15px',
    cursor: 'pointer'
  },
  input: {
    width: '30px',
    margin: '0 10px',
    textAlign: 'center',
    outline: 'none'
  }
}

NumberInput.propTypes = {
	value: propTypes.number.isRequired,
	id: propTypes.string.isRequired,
	onChange: propTypes.func.isRequired,
	onClick: propTypes.func.isRequired,
	onBlur: propTypes.func
};

export default injectSheet(style)(NumberInput);