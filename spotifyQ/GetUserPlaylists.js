import getTokens from "../spotifyAuth/getAccessToken";
import firebase from "../shared/firebase.js";

const db = firebase.firestore();

const GetUserPlaylists = async(user) => {

    const access = await getTokens();

    if (!access) {
      console.log("No access")
    }
    
    try {
        playlists=[];
        const response = await fetch(`https://api.spotify.com/v1/users/${user}/playlists/`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${access}`
            }
          });
        const repo = await response.json();
        repo.items.map((playlist) => {
          playlists.push({
            name: playlist.name,
            songs: playlist.tracks,
            images: playlist.images,
            id: playlist.id
          });
        })
        return playlists;
    } catch (err) {
        console.error(err);}
        
    return false
}

export default GetUserPlaylists;
