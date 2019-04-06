import React from 'react';
import renderer from 'react-test-renderer';
import OrderSummary from '../../app/ui/components/OrderSummary';

it('renders correctly', () => {
  const tree = renderer
    .create(<OrderSummary sum={10}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});