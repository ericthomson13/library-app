import React from 'react';
import { mount } from 'enzyme';

import MLAItem from '../components/MLAItem';

import mlaData from '../utility/mlaData';

describe('MLAItem Unit Tests', () => {
  let mountTest;
  beforeEach(() => {
    mountTest = mount(<MLAItem type={mlaData[0].type} item={[ ...mlaData[0].items ]} />);
  });
  it('Renders without Crashing', () => {
    expect(mountTest.find('').length).toBe(1);
  });
})