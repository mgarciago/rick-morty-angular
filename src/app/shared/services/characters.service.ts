import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  public baseURL: string = "https://rickandmortyapi.com/api/";
  public charactersURL: string = this.baseURL + "character";
  public dataBaseURL: string = "http://localhost:3000/creations"
  public characterDetailURL: string = "";
  public nextPageURL: string = "";
  public page: string = "";

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  
  public characterData = {
    id: "",
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: ""
    },
    location: {
      name: ""
    },
    image: ""
  }

  public clearForm() {
    this.characterData = {
      id: "",
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
      origin: {
        name: ""
      },
      location: {
        name: ""
      },
      image: ""
    }
  }

  public editCharacter(item: any) {
    this.characterData = item;
  }

  public showDetail(item: any){
    this.characterData = item;
  }

  public getCharacterURL(url: any){
    this.characterDetailURL = url.url;
    console.log(this.characterDetailURL)
  }

  
  public getCharacterDetail() {
    return this.http.get(this.characterDetailURL)
  }
  
  public postCharacter(newCharacter: any) {
    return this.http.post(this.dataBaseURL, newCharacter)
  }

  public deleteCharacter(characterID: any) {
    return this.http.delete(`${this.dataBaseURL}/${characterID}`)
  }

  public putCharacter(characterID: any, editedCharacter: any) {
    return this.http.put(`${this.dataBaseURL}/${characterID}`, editedCharacter)
  }

  public getCharacters():Observable<any> {
    return this.http.get(this.charactersURL);
  }

  public getMoreCharacters(page: any):Observable<any>{
    return this.http.get(`${this.charactersURL}/${page=this.page}`)
  }

  public getMyCreations():Observable<any> {
    return this.http.get(this.dataBaseURL)
  }

}
