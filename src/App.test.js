import React from 'react';
import {render} from 'react-dom';
import App from './App';
import { shallow} from 'enzyme';



describe('<App />', () => {

  it('Should render App' , ( ) => {
    const app = shallow(<App/>);
    expect(app.find('div.App').length).toBe(1)
  })

})