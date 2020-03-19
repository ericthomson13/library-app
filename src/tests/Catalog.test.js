import React from 'react';
import { shallow, mount } from 'enzyme';

import Catalog from '../screens/Catalog';

// TODO: add in mock functions for state updates and handler testing
// TODO: add in integration testing with CatalogItem Children

describe('Test Suite for Catalog', () => {
  let shallowTest;
  beforeEach(() => {
    shallowTest = shallow(<Catalog />);
  });
  it('Mounts without Crashing', () => {
    expect(shallowTest.find('h2').length).toBe(1);
  });
  it('Does not render Winner on Mount', () => {
    expect(shallowTest.find('.winner').length).toBe(0);
  });
});

describe('Integration with CatalogItem Children', () => {
  let mountTest;
  beforeEach(() => {
    mountTest = mount(<Catalog />);
  });
  it('Renders a List of the Correct Length', () => {
    expect(mountTest.find('.catalog-item').length).toBe(6);
  });
});