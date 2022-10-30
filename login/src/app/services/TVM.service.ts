import { Injectable } from '@angular/core';
import { TVMEntertainment } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
@Injectable({
  providedIn: 'root'
})
export class TVMService {

  spotifyApi:Spotify.SpotifyWebApiJs=null;

constructor() {
  this.spotifyApi=new Spotify();
}
  UrlLogin(){
    const authEndpoint = `${TVMEntertainment.authEndpoint}?`;
    const clientId=`client_id=${TVMEntertainment.clientId}&`;
    const redirectUrl=`redirect_uri=${TVMEntertainment.redirectUrl}&`;
    const scopes=`scopes=${TVMEntertainment.scopes.join('%20')}&`;
    const responseType =`response_type=token&show_dialog=true`;
    return authEndpoint +clientId +redirectUrl+scopes+responseType;
  }

  tokenUrlcallback(){

    if (!window.location.hash)
       return'';
    const params=window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
      }

      definirAccessToken(token:string){
        this.spotifyApi.setAccessToken(token);
        localStorage.setItem('token',token);
        this.spotifyApi.skipToNext();
      }
}
