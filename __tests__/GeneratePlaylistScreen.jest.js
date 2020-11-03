import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import App from '../App';
import { shallow } from 'enzyme';

afterEach(cleanup);

describe('<App />', () => {
  jest.useFakeTimers();
  it('App Renders', async () => {
    const screen = render(
      <App />
    );

  });
});