import getTokens from "../spotifyAuth/getAccessToken";
import firebase from "../shared/firebase.js";

const db = firebase.firestore();

const GetUserPlaylists = async(user) => {
    const access = await getTokens();

    if (!access) {
      console.log("No access")
    }
    
    try {
        let playlists=[];
        const response = await fetch(`https://api.spotify.com/v1/users/${user}/playlists/`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${access}`
            }
          });
        const repo = await response.json();
        if (typeof repo === 'undefined' || typeof repo.items === 'undefined') {
          return [];
        };
        repo.items.map((playlist) => {
          if (typeof playlist !== 'undefined') {
            playlists.push({
              name: playlist.name,
              songs: playlist.tracks,
              id: playlist.id,
              images: playlist.images
            }); 
          }
            
        })
        return playlists;
    } catch (err) {
        console.error(err);}
        
    return false
}

export default GetUserPlaylists;
