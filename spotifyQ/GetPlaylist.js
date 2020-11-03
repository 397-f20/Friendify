import getTokens from "../spotifyAuth/getAccessToken";

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
        if (typeof repo === 'undefined' || typeof repo.items === 'undefined') {
          return [];
        }
        repo.items.map((item) => {
          if (typeof item !== 'undefined' && typeof item.track !== 'undefined') {
            if (item.track.name === null) {
              console.log("null");
            } else {
              tracks.push(
                //"name": item.track.name,
                item.track.id,
                //"artists": item.track.artists,
                //"images": item.track.album.images,
            )
            }
            
          }
        })
        return tracks;
    } catch (err) {
        console.error(err);
      }
}

export default GetPlaylist;