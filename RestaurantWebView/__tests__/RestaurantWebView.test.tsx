import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {RestaurantWebView} from '../RestaurantWebView';

describe('RestaurantWebView', () => {
  it('should renders correctly', () => {
    const {toJSON} = renderer.create(
      <RestaurantWebView
        displayWebView={'url'}
        setDisplayWebView={() => jest.fn()}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
