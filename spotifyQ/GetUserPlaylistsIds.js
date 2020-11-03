import getTokens from "../spotifyAuth/getAccessToken";

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
        if (typeof repo === 'undefined' || typeof repo.items === 'undefined') {
          return [];
        };
        let playlists = [];
        repo.items.map((item) => {
          if (!(typeof item === 'undefined')) {
            playlists.push(item.href);
          }
        })
        return playlists;
    } catch (err) {
        console.error(err);}
        
    return false
}

export default GetUserPlaylistsIds;
