import React from 'react';
import renderer from 'react-test-renderer';
import ProductsList from '../../app/ui/components/ProductsList';

const func = () => {};

it('renders correctly', () => {
  const tree = renderer
    .create(<ProductsList onRowClick={func} products={[
			{
				name: 'product',
				_id: '1',
				product_id: 'classic',
				price: 100,
				quantity: 1,
				onInputClick: func,
				onInputChange: func,
				onInputBlur: func
			}
		]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});