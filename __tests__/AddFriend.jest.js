import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import App from '../App';
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';
import AddFriendSearch from '../components/AddFriendSearch';
import getTokens from "../spotifyAuth/getAccessToken";
import * as admin from 'firebase-admin';

const {
    mockCollection,
    mockAdd,
  } = require('firestore-jest-mock/mocks/firestore');

const { mockFirebase } = require('firestore-jest-mock');

describe ('Add Friend Tests', () => {
    mockFirebase({
        database: {
            friends: [{displayName: 'joanna', name: 'jo'}]
        }
    });

    it('Lookup User ID', async () => {
        const userid = 'jrzax';
        const {getByText, getByPlaceholder} = render(
            <AddFriendSearch/>
        );
        const button = getByText(/Add Friend/i);
        fireEvent.changeText(getByPlaceholder(/Friend's Spotify User ID/i), userid);
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