import React from 'react';
import { mount } from 'enzyme';

import Home from '../screens/Home';

describe('Home Screen Testing Suite', () => {
  let mountTest;
  beforeEach(() => {
    mountTest = mount(<Home />);
  })
  it('Mounts without Crashing', () => {
    expect(mountTest.find('.home-title').hasClass('home-title')).toBe(true);
  });
});