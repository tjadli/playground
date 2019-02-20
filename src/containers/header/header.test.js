import React from 'react';
import Header from './index';
import { shallow } from 'enzyme';



describe('<Header />', () => {

  it('Should render header element', () => {
    const header = shallow(<Header />);
    expect(header.find('header').length).toBe(1)
  })

  it('Should render the logo', () => {
    const header = shallow(<Header />);
    expect(header.find('img.logo').length).toBe(1)
  })

})