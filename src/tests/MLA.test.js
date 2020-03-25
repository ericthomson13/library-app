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
  it('Renders an h2 with the class game-title', () => {
    expect(mountTest.find('h2').hasClass('game-title')).toBe(true);
  });
});