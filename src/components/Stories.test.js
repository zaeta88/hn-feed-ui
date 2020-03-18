import React from 'react';
import { shallow } from 'enzyme';
import Stories from './Stories';


describe('React.Component Stories', () => {
  it('should render correctly', () => {
    const component = shallow(<Stories />);
    expect(component).toMatchSnapshot();
  });
});
