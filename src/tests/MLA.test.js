import React from 'react';
import { mount } from 'enzyme';

import MLAFormat from '../screens/MLA';

describe('MLA Screen Testing Suite', () => {
  let mountTest;
  beforeEach(() => {
    mountTest = mount(<MLAFormat />)
  });
  it('Renders without crashing', () => {
    expect(mountTest.find('div').length).toBe(5);
  });
  it('Does not Render Winner on Mount', () => {
    expect(mountTest.find('.winner').length).toBe(0);
  });
});