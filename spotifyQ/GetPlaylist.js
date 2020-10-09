import getTokens from "../spotifyAuth/getAccessToken";
import firebase from "../shared/firebase.js";

const db = firebase.firestore();

const GetPlaylist = async({userHref}) => {

    const access = await getTokens();

    if (!access) {
      console.log("No access")
    }
    console.log(access)
    
    try {
        const response = await fetch(`${userHref}/tracks?market=US`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${access}`
            }
          });
        const repo = await response.json();  
        console.log(Object.values(repo));
    } catch (err) {
        console.error(err);}
    
    console.log("test");
}

export default GetPlaylist