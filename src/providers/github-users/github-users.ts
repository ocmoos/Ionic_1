import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../../models/user/user';

/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubUsers {
githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {
   
    console.log('Hello GithubUsers ');
  }
 // Load all github users

    load(): Observable<User[]> {

      return this.http.get(`${this.githubApiUrl}/users`)
              .map(res => <User[]>res.json());
    }
// Get github user by providing login(username)
    loadDetails(login: string): Observable<User> {
      return this.http.get(`${this.githubApiUrl}/users/${login}`)
        .map(res => <User>(res.json()))
    }
// Search fot github users
    searchUsers(searchParam: string): Observable<User[]>{
      return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`)
        .map(res => <User[]>(res.json()))
    }

}
