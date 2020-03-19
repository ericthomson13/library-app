import React from 'react';
import { mount } from 'enzyme';

import APAFormat from '../screens/APA';

describe('Tests for APA Screen', () => {
  let mountTest;
  beforeEach(() => {
    mountTest = mount(<APAFormat />);
  });
  it('Mounts without Crashing', () => {
    expect(mountTest.find('.game-title')).toBeTruthy();
  });
});