import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Spotify service listo!!!')
   }

getQuery( query:string){
  const url= `https://api.spotify.com/v1/${query}`;

  const headers=new HttpHeaders({

    //Reemplazar token generado cada una hora!!!
    'Authorization': 'Bearer BQDE7khUn1kPeJ7olFl5oq3k-H2TdilIj0Q5PuLi2FbY3s_zdec1b-okMxD0CVcktu-gJyieuXTBClofvn9iHs-uFGo5I2bIn843_BziuRRRD1lO3P24cOC6GEiL7g0VwXVbrpTgWLEhEFyU61VGr7ca4UMxydfuP6g'
  });

  return this.http.get(url,{ headers });
  
}

getNewReleases(){


return this.getQuery('browse/new-releases')
           .pipe(map((data:any) => data.albums.items ));                    
}


getArtistas(termino: string){

  return this.getQuery(`search?q=${termino}&type=artist`)
             .pipe(map((data:any) => data.artists.items));
}

getArtista( id: string){

  return this.getQuery(`artists/${id}`);
             
}

getTopTracks( id: string){

  return this.getQuery(`artists/${id}/top-tracks?country=us`)
             .pipe(map((data:any) => data.tracks));
             
}


}
