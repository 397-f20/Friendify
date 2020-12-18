import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import AddFriendSearch from '../components/AddFriendSearch';
import getTokens from "../spotifyAuth/getAccessToken";
import {describe, expect, it} from '@jest/globals'
import {useNavigation} from '@react-navigation/native'
import FriendPlaylists from '../components/FriendPlaylists';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({name: "Jordan Zax"}),
  })
);

beforeEach(() => {
  fetch.mockClear();
});


// const {mockCollection } = require('firestore-jest-mock/mocks/firestore');
// const {mockFirebase} = require('firestore-jest-mock');
describe('Add Friend Tests', () => {
    // mockFirebase({
    //     database: {
    //         friends: [{displayName: 'joanna', name: 'jo'}]
    //     }
    // });

    it('Lookup User renders', async () => {
        const userid = 'jrzax';
        const screen = render(
            <AddFriendSearch/>
        );
        const button = screen.getByText(/Add Friend/i);
        fireEvent.change(screen.getByPlaceholderText(/Friend's Spotify Profile Link/i), userid);
        fireEvent.click(button);

    })
    it ('generate Playlist renders', async () => {
        const userid = 'jrzax';
        const username = 'Jordan Zax'
        const button = screen.getByText(username);
        fireEvent.click(button);
        
        const screen = render(
          <FriendPlaylists/>
        );

    })
})