import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import App from '../App';
import { shallow } from 'enzyme';

afterEach(cleanup);

describe('<App />', () => {
  console.log("here")
  jest.useFakeTimers();
  it('Generate Button Test', async () => {
    const screen = render(
      <App />
    );
    fireEvent.click(screen.getByText('Generate Playlist'))

  });
});