import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(pageNo:number) {
    let params = new HttpParams;
    params=params.append('page' ,pageNo)
    return this.http.get('https://reqres.in/api/users')
  }
  getUserDetails(userId:number) {
    return this.http.get(`https://reqres.in/api/users/${userId}`)

  }
}
