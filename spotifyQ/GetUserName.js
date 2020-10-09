import getTokens from "../spotifyAuth/getAccessToken";

const GetUserName = async(user) => {

    const access = await getTokens();

    if (!access) {
      console.log("No access")
    }
    
    try {
        const response = await fetch(`https://api.spotify.com/v1/users/${user}`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${access}`
            }
          });
        const repo = await response.json();  
        return repo.display_name
    } catch (err) {
        console.error(err);}
    
    console.log("test");
}

export default GetUserName