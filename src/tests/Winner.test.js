import React from 'react';
import { shallow } from 'enzyme';

import Winner from '../components/Winner';

describe('Winner testing Suite', () => {
  let shallowTest;
  beforeEach(() => {
    shallowTest = shallow(<Winner />);
  });
  it('Renders without Crashing', () => {
    expect(shallowTest.find('.winner').length).toBe(1);
  });
});