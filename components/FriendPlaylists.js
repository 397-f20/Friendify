import React from 'react';

import FriendPlaylistButton from './FriendPlaylistButton';


const FriendPlaylists = ({playlists}) => {
    return (
        playlists.map(playlist => (
            <FriendPlaylistButton key={`${name}, ${playlist}`} playlist={playlist} />
        ))
    );
};

export default FriendPlaylists;
