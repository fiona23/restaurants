import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {RestaurantList} from '../RestaurantList';

describe('RestaurantList', () => {
  const mockRestaurants = [
    {
      name: 'Aberdeen - Belmont Street',
      url: 'https://www.nandos.co.uk/eat/restaurants/aberdeen-belmont-street',
      geo: {
        address: {
          streetAddress: 'Unit 10, The Academy, Belmont St',
          addressLocality: 'Aberdeen, Aberdeen City',
          postalCode: 'AB10 1LB',
        },
      },
    },
    {
      name: 'Aberdeen - Union Square',
      url: 'https://www.nandos.co.uk/eat/restaurants/aberdeen-union-square',
      geo: {
        address: {
          streetAddress: 'Unit FS17, Union Square, Guild St',
          addressLocality: 'Aberdeen, Aberdeen City',
          postalCode: 'AB11 5RG',
        },
      },
    },
    {
      name: 'Addlestone',
      url: 'https://www.nandos.co.uk/restaurants/addlestone',
      geo: {
        address: {
          streetAddress: 'Addlestone One, Station Rd',
          addressLocality: 'Addlestone, Surrey',
          postalCode: 'KT15 2GN',
        },
      },
    },
  ];

  it('should renders correctly', () => {
    const {toJSON} = renderer.create(
      <RestaurantList
        restaurants={mockRestaurants}
        setDisplayWebView={() => jest.fn()}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
