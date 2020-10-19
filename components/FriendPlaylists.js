import React, { useEffect, useState } from 'react';

import FriendPlaylistButton from './FriendPlaylistButton';
import GetUserPlaylists from '../spotifyQ/GetUserPlaylists';



const FriendPlaylists = ({navigation, name}) => {

    const [playlists, setPlaylists] = useState(false)
    useEffect(() => {
        GetUserPlaylists(name).then((value) => {
            setPlaylists(value);
        }
    );
    },[])
    
    if(!playlists) {
        return false
    }
    return (
        playlists.map(playlist => (
            <FriendPlaylistButton key={playlist.id} playlist={playlist} navigation={navigation}/>
        ))
    );
};

export default FriendPlaylists;
