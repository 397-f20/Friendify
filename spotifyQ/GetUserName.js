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
        if (repo.hasOwnProperty("error"))
          {return false}; 
        console.log(repo); 
        
        const obj = {
          display_name: repo.display_name,
          images: repo.images
        }
        console.log(obj);
        
        return obj;
    } catch (err) {

        console.error(err);
        return false;}
}

export default GetUserName;