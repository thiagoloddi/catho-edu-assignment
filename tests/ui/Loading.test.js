import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../../app/ui/components/Loading';

it('renders correctly showing', () => {
  const tree = renderer
    .create(<Loading show={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly hidden', () => {
  const tree = renderer
    .create(<Loading show={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});