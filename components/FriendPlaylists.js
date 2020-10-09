import React, { useEffect, useState } from 'react';

import FriendPlaylistButton from './FriendPlaylistButton';
import GetUserPlaylists from '../spotifyQ/GetUserPlaylists';



const FriendPlaylists = ({name}) => {

    const [playlists, setPlaylists] = useState(false)
    useEffect(() => {
        GetUserPlaylists(name).then((value) => {
        setPlaylists(value)
        }
    );},[])
    if(!playlists){
        return false
    }
    return (
        playlists.map(playlist => (
            <FriendPlaylistButton key={`${name}, ${playlist}`} playlist={playlist} />
        ))
    );
};

export default FriendPlaylists;
