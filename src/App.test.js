import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('Test for App', () => {
  it('renders App without crashing', () => {
    const wrapper = mount(<App />);
    expect(!!wrapper).toBe(true);
  });
});
