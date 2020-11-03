import getTokens from "../spotifyAuth/getAccessToken";

const GetSongInfo = async(id) => {

    const access = await getTokens();

    if (!access) {
      console.log("No access")
    }
    
    try {
        const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${access}`
            }
          });
        const repo = await response.json();
        //console.log(repo);
        if (typeof repo === 'undefined') {
          return [];
        }
        console.log(repo);
        //const im = (typeof repo.images === 'undefined') ? [] : repo.album.images;
        var obj = {
            "name": repo.name,
            "artists": repo.artists,
            "images": repo.album.images
        }
        return obj;
    } catch (err) {
        console.error(err);
      }
}

export default GetSongInfo;