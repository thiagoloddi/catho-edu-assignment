import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

import { formatCurrency } from '../../utils/numbers';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NumberInput from '../../ui/atoms/NumberInput';

const ProductsList = ({ products, classes }) => {
	const renderBody = () => {
		return products.map(({ name, _id, product_id, price, quantity, onInputClick, onInputChange, onInputBlur }) => (
			<TableRow id={_id} className={classes.row} key={_id}>
        <TableCell>{product_id}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell align="center"><NumberInput id={_id} value={quantity} onClick={onInputClick} onChange={onInputChange} onBlur={onInputBlur} /></TableCell>
        <TableCell align="center">{formatCurrency(price / 100)}</TableCell>
      </TableRow>
    ));
  }
	
  return (
		<div>
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell >NAME</TableCell>
              <TableCell align="center">QUANTITY</TableCell>
              <TableCell align="center">FULL PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderBody()}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

ProductsList.propTypes = {
	products: propTypes.arrayOf(propTypes.shape({
		name: propTypes.string.isRequired,
		_id: propTypes.string.isRequired,
		product_id: propTypes.string.isRequired,
		price: propTypes.number.isRequired,
		quantity: propTypes.number.isRequired,
		onInputClick: propTypes.func.isRequired,
		onInputChange: propTypes.func.isRequired,
		onInputBlur: propTypes.func.isRequired
	})).isRequired,
};

ProductsList.defaultProps = {
	products: []
};

const styles = {
	table: {
		marginTop: '20px',
		'& td, & th': {
			fontSize: '14px'
		}
	},
	row: {
		'&:hover': {
			backgroundColor: '#f5f5f5',
		}
	}
};

export default injectSheet(styles)(ProductsList);