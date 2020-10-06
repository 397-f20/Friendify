import getTokens from "../spotifyAuth/getAccessToken";

const GetPlaylist = async() => {
    const access = "BQASQ3P7GaMNjgqpQ3CXCaGBEpbqc2KqJ_hTZhSnrKPXzOtEbUIHw-Iu8KdmE1iS6mqIrURbvdEYP_BWdK0";
    try {
        const response = await fetch('https://api.spotify.com/v1/playlists/7o7eG29PqAMJ4Z6v9Nvq7K/tracks?market=US', {
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

export default GetPlaylist;