import React from 'react';
import { mount } from 'enzyme';

import MLAFormat from '../screens/MLA';

describe('MLA Screen Testing Suite', () => {
  let mountTest;
  beforeEach(() => {
    mountTest = mount(<MLAFormat />)
  });
  it('Renders without crashing', () => {
    expect(mountTest.find('h2').length).toBe(1);
  });
});