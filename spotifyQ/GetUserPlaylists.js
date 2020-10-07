import getTokens from "../spotifyAuth/getAccessToken";
import firebase from "../shared/firebase.js";

const db = firebase.firestore();

const GetUserPlaylists = async(user) => {

    const access = await getTokens();

    if (!access) {
      console.log("No access")
    }
    console.log(access)
    console.log(user)
    
    try {
       // users/{user_id}/playlists 
        const response = await fetch(`https://api.spotify.com/v1/users/${user}/playlists/`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${access}`
            }
          });
        const repo = await response.json();  
        console.log("here")
        console.log(repo)
        console.log(repo.items.map((item) => item.href));

        return repo.items.map((item) => item.name)
    } catch (err) {
        console.error(err);}
        
    console.log("GetUserPlaylists end");
    return false
}

export default GetUserPlaylists