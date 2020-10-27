import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import AddFriendSearch from '../components/AddFriendSearch';
import getTokens from "../spotifyAuth/getAccessToken";
import {describe, expect, it} from '@jest/globals'


const {mockCollection } = require('firestore-jest-mock/mocks/firestore');
const {mockFirebase} = require('firestore-jest-mock');
describe('Add Friend Tests', () => {
    mockFirebase({
        database: {
            friends: [{displayName: 'joanna', name: 'jo'}]
        }
    });

    it('Lookup User ID', async () => {
        const userid = 'jrzax';
        const screen = render(
            <AddFriendSearch/>
        );
        const button = screen.getByText(/Add Friend/i);
        console.log(screen)
        fireEvent.change(screen.getByLabelText(/Friend's Spotify User ID/i), userid);
        fireEvent.press(button);
        
        const access = await getTokens();

        expect(global.fetch).toHaveBeenCalledWith(
            'https://api.spotify.com/v1/users/jrzax', 
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${access}`
              }
            }
        )

        expect(mockCollection).toHaveBeenCalledWith('friends');
    })
})