import React from 'react';
import { mount } from 'enzyme';

import CitationItem from '../components/CitationItem';

import mlaData from '../utility/mlaData';

describe('MLAItem Unit Tests', () => {
  let mountTest;
  beforeEach(() => {
    mountTest = mount(<CitationItem type={mlaData[0].type} item={[ ...mlaData[0].items ]} />);
  });
  it('Renders without Crashing', () => {
    expect(mountTest.find('.mla-item').length).toBe(1);
  });
  it('Does not Render Winner on Mount', () => {
    expect(mountTest.find('.winner').length).toBe(0);
  });
  // need to update to figure out how to mock state function
  xit('Renders Winner when Arrays Match', () => {
    expect(mountTest.find('.winner').hasClass('winner')).toBe(true);
  })
});