import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
//URL for CRUD operations
usersUrl = "http://localhost:3000/user";
//Create constructor to get Http instance
constructor(private http:  HttpClient) {}

//Fetch all users
getAllusers(): Observable<UserModel[]> {
    return this.http.get(this.usersUrl+"/get-users").pipe(map((response: UserModel[]) => response))
}

//Fetch all user friends
getuserFriend(id: string): Observable<UserModel[]> {
  let params = new HttpParams();
   
  const reqOpts = {
    params:  params.append('id', id)
  }

  return this.http.get(this.usersUrl+"/get-userfriends", reqOpts).pipe(map((response: UserModel[]) => response))
}

//Fetch friend friends
getuserFriendFriends(id: string): Observable<UserModel[]> {
  let params = new HttpParams();
   
  const reqOpts = {
    params:  params.append("id", id)
  }

  return this.http.get(this.usersUrl+"/get-userfriend-friends", reqOpts).pipe(map((response: UserModel[]) => response))
}

private extractData(res: Response) {
    let body = res.json();
    return body;
}

private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
    }
}

export interface UserModel {
  id: string,
  firstname: string,
  lastname: string,
  email: string,
}
