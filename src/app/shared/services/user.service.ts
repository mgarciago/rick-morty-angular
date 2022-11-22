import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseURL: string = 'http://localhost:3000/users'
  constructor(private http: HttpClient) { }

  public userData = {
    id: "",
    username: "",
    email: "",
    password: "",
    repassword: ""
  }

  public clearUser () {
    this.userData = {
      id: "",
      username: "",
      email: "",
      password: "",
      repassword: ""
    }
  }
 

  public getUser() {
    return this.http.get(this.baseURL)
  }

  public postUser(newUser: any) {
    return this.http.post(this.baseURL, newUser)
  }

}
