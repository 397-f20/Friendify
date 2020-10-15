import React from 'react';

import MyPlaylistButton from './MyPlaylistButton';


const MyPlaylists = ({playlists, navigation}) => {
    return (
        playlists.map(playlist => (
            <MyPlaylistButton key={`${playlist}, ${playlist}`} playlist={playlist} />
        ))
    );
};

export default MyPlaylists;
