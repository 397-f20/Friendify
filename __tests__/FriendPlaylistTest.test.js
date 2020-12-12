import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import FriendPlaylists from '../components/FriendPlaylists';
import getTokens from "../spotifyAuth/getAccessToken";
import {describe, expect, it} from '@jest/globals'
import {useNavigation} from '@react-navigation/native'
import FriendPlaylistButton from '../components/FriendPlaylistButton';

afterEach(cleanup);

describe ('Friend Playlist Test', () => {
    it('List Renders', async() => {
        const screen = render(
            <FriendPlaylists />
          );
    }   
    );

});