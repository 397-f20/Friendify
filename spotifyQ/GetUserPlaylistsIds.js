import getTokens from "../spotifyAuth/getAccessToken";
import firebase from "../shared/firebase.js";

const db = firebase.firestore();

const GetUserPlaylistsIds = async(user) => {

    const access = await getTokens();

    if (!access) {
      console.log("No access")
    }
    
    try {
       // users/{user_id}/playlists 
        const response = await fetch(`https://api.spotify.com/v1/users/${user}/playlists/`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${access}`
            }
          });
        const repo = await response.json();

        return repo.items.map((item) => item.href)
    } catch (err) {
        console.error(err);}
        
    return false
}

export default GetUserPlaylistsIds;
