import React from 'react';

import MyPlaylistButton from './MyPlaylistButton';


const MyPlaylists = ({playlists}) => {
    return (
        playlists.map(playlist => (
            <MyPlaylistButton key={`${name}, ${playlist}`} playlist={playlist} />
        ))
    );
};

export default MyPlaylists;
