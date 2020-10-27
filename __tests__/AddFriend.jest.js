import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import AddFriendSearch from '../components/AddFriendSearch';
import getTokens from "../spotifyAuth/getAccessToken";
import {describe, expect, it} from '@jest/globals'
import {useNavigation} from '@react-navigation/native'

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

    it('Lookup User ID', async () => {
        const userid = 'jrzax';
        const screen = render(
            <AddFriendSearch/>
        );
        const button = screen.getByText(/Add Friend/i);
        console.log(screen)
        fireEvent.change(screen.getByPlaceholderText(/Friend's Spotify User ID/i), userid);
        fireEvent.click(button);
        
        const access = await getTokens();

        expect(global.fetch).toHaveBeenCalledWith(
            'https://accounts.spotify.com/api/token', 
            {
                method: 'POST',
                body: "grant_type=client_credentials",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ZjZlMDMwMTRjZTdkNGY2OTlmYjQxOWExNTYxMTNlNmE6MzlhNzQ1M2IxNWU4NDI5NGExMTg2ZmY0NWVmMWU2NTA=',
              },
            },
        )
    })
})