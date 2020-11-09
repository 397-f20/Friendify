import React, { useEffect, useState } from 'react';
import FriendPlaylistButton from './FriendPlaylistButton';
import GetUserPlaylists from '../spotifyQ/GetUserPlaylists';

const FriendPlaylists = ({navigation, id}) => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        GetUserPlaylists(id).then((value) => {
            setPlaylists(value);
        }
    );
    },[])
    
    if(playlists.length == 0) {
        return false
    }
    return (
        playlists.map(playlist => (
            <FriendPlaylistButton key={playlist.id} playlist={playlist} navigation={navigation} img={playlist.images[0].url}/>
        ))
    );
};

export default FriendPlaylists;
