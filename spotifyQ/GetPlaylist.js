import getTokens from "../spotifyAuth/getAccessToken";
import firebase from "../shared/firebase.js";

const db = firebase.firestore();

const GetPlaylist = async(playlistHref) => {

    const access = await getTokens();

    if (!access) {
      console.log("No access")
    }
    
    try {
        const response = await fetch(`${playlistHref}/tracks?market=US`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${access}`
            }
          });
        const repo = await response.json();  
        console.log(repo.items.map((item) => item.track.name))
        return repo.items.map((item) => item.track.name)
    } catch (err) {
        console.error(err);}
    
    console.log("test");
}

export default GetPlaylist