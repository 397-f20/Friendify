import getTokens from "../spotifyAuth/getAccessToken";
import firebase from "../shared/firebase.js";

const db = firebase.firestore();

const GetPlaylist = async(playlistHref) => {

    const access = await getTokens();

    if (!access) {
      console.log("No access")
    }
    
    try {
        let tracks=[];
        const response = await fetch(`${playlistHref}/tracks?market=US`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${access}`
            }
          });
        const repo = await response.json();
        if (typeof repo === 'undefined' || repo.items === 'undefined') {
          return [];
        }
        repo.items.map((item) => {
          if (!(typeof item === 'undefined')) {
            tracks.push(item);
          }
        })
        console.log(tracks.length);
        return tracks;
    } catch (err) {
        console.error(err);
      }
}

export default GetPlaylist;