import React from 'react';
import renderer from 'react-test-renderer';
import SelectInput from '../../app/ui/atoms/SelectInput';

const func = () => {};

it('renders correctly', () => {
  const tree = renderer
    .create(<SelectInput value={'1'} onChange={func} options={[
			{ id: '1', label: 'opt 1' },
			{ id: '2', label: 'opt 2' }
		]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});