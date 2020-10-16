import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import FriendScreen from '../screens/FriendsScreen';
import { shallow } from 'enzyme';

afterEach(cleanup);

describe('<FriendScreen />', () => {
  console.log("here")
  jest.useFakeTimers();
  it('has 1 child', async () => {
    const tree = render(
      <FriendScreen />
    );
    console.log(tree)
  });
});