import React from 'react';
import { shallow } from 'enzyme';

import CatalogItem from '../components/CatalogItem';

describe('CatalogItem Tests', () => {
  let shallowTest; let downHandler; let upHandler;
  beforeEach(() => {
    downHandler = jest.fn(() => 1).mockName('downHandler');
    upHandler = jest.fn(() => 1).mockName('upHandler');
    shallowTest = shallow(
      <CatalogItem 
        name="PS3022 .K622 2019" 
        index={1}
        upHandler={upHandler}
        downHandler={downHandler}
      />
    );
  });

  it('Mounts without Crashing', () => {
    expect(shallowTest.find('.catalog-item').length).toBe(1);
  });
  it('Has 2 buttons', () => {
    expect(shallowTest.find('button').length).toBe(2);
  });
  it('Has only 1 item-name', () => {
    expect(shallowTest.find('.item-name').length).toBe(1);
  });
  it('Has a name that matches input prop', () => {
    expect(shallowTest.find('.item-name').text()).toBe('PS3022 .K622 2019');
  });
  it('Has an up button', () => {
    expect(shallowTest.find('.up-button').text()).toBe('Move Up');
  });
  it('Has a down button', () => {
    expect(shallowTest.find('.down-button').text()).toBe('Move Down');
  });
  it('Handles Click on Move Up', () => {
    shallowTest.find('.up-button').simulate('click')
    expect(upHandler).toHaveBeenCalled();
  });
  it('Returns Correct Index Value on Up Button Click', () => {
    shallowTest.find('.up-button').simulate('click');
    expect(upHandler.mock.results[0].value).toBe(1);
  });
  it('Handles Click on Move Down', () => {
    shallowTest.find('.down-button').simulate('click');
    expect(downHandler).toHaveBeenCalled();
  });
  it('Returns Correct Index Value on Down Button Click', () => {
    shallowTest.find('.down-button').simulate('click');
    expect(downHandler.mock.results[0].value).toBe(1);
  });
});