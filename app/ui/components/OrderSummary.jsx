import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

import { formatCurrency } from '../../utils/numbers';

const OrderSummary = ({ classes, loading, sum }) => {

  const renderSum = () => {
    if(loading) {
      return <img className={classes.sumLoading} src="/assets/progress.gif" />
    } else {
      return formatCurrency(sum / 100);
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.priceField}>
        <div className={classes.heading}>FINAL PRICE:</div>
        <div className={classes.price}>{renderSum()}</div>
      </div>
    </div>
  )
}

OrderSummary.propTypes = {
	loading: propTypes.bool,
	sum: propTypes.number.isRequired
};

const style = {
  container: {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    border: '2px solid rgba(0, 0, 0, .1)',
    padding: '10px 20px',
    marginTop: '20px',
  },
  heading: {
    fontWeight: 'bold'
  },
  priceField: {
    width: '100%',
    '& > *': {
      display: 'inline-block',
      fontSize: '20px',
    }
  },
  price: {
    float: 'right'
  },
  sumLoading: {
    float: 'right',
    height: '20px',
    width: '20px'
  }
}

export default injectSheet(style)(OrderSummary);