import { encode as btoa } from 'base-64';

const spotifyCredentials = {
  clientId: 'f6e03014ce7d4f699fb419a156113e6a',
  clientSecret: '39a7453b15e84294a1186ff45ef1e650',
}

const getTokens = async () => {

  let token = false
    
  try {
  //  const authorizationCode = await getAuthorizationCode() //we wrote this function above
  //  const credentials = await getSpotifyCredentials() //we wrote this function above (could also run this outside of the functions and store the credentials in local scope)
    const credsB64 = btoa(`${spotifyCredentials.clientId}:${spotifyCredentials.clientSecret}`);
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credsB64}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials`,
    });
    const responseJson = await response.json();
    // destructure the response and rename the properties to be in camelCase to satisfy my linter ;)
    const {
      access_token: accessToken,
      refresh_token: refreshToken,
      expires_in: expiresIn,
    } = responseJson;
    //i want to put responseJson in firebase
    token = responseJson.access_token;

    const expirationTime = new Date().getTime() + expiresIn * 1000;
 //   await setUserData('accessToken', accessToken);
 //   await setUserData('refreshToken', refreshToken);
 //   await setUserData('expirationTime', expirationTime);
  } catch (err) {
    console.error(err);
  }
  return token;
}

export default getTokens;
