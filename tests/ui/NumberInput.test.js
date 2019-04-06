import React from 'react';
import renderer from 'react-test-renderer';
import NumberInput from '../../app/ui/atoms/NumberInput';

const func = () => {};

it('renders correctly', () => {
  const tree = renderer
    .create(<NumberInput value={0} id={'1'} onChange={func} onClick={func} onBlur={func} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});