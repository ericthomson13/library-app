import React from 'react';
import { mount } from 'enzyme';

import App from '../App';

describe('Tests for App', () => {
  let mountTest;
  beforeEach(() => {
    mountTest = mount(<App />)
  });
  it('renders App without crashing', () => {
    expect(!!mountTest).toBe(true);
  });
  it('renders the Router', () => {
    expect(mountTest.find('Router').length).toBe(1);
  });
  it('renders a div within the Router', () => {
    expect(mountTest.find('div').length).toBe(1);
  });
  it('renders a single Switch', () => {
    expect(mountTest.find('Switch').length).toBe(1);
  });
  it('renders 4 Links in the navBar', () => {
    expect(mountTest.find('Link').length).toBe(4);
  });
  // figure out how to test for subcomponents rendering
  xit('renders Routes in the Switch', () => {
    expect(mountTest.find('Switch').contains('Route')).toBe(true);
  });
});
