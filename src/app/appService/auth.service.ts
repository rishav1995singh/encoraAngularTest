import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthResponse } from '../appInterface/authResponse.Interface';
import { User } from '../appModel/user.model';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user = new BehaviorSubject<User>(null);

  constructor(private http:HttpClient) { }

  login(email,password){

   return this.http.post<AuthResponse>('https://reqres.in/api/users', {
      email: email,
      password: password
    }).pipe(

      tap(res=> {
        this.authenticateUser(res.email, res.password)
      })

    )


  }



  saveForm(data: any){

    return this.http.post<AuthResponse>('https://reqres.in/api/users',data

     )


   }

   updateForm(data: any, id: number){

    return this.http.put<AuthResponse>('https://reqres.in/api/users/2'+
    id,data

     )


   }

   deleteProfile(id: number) {
     return this.http.delete('https://reqres.in/api/users'+id);
   }

  private authenticateUser(email, password){
    const user = new User(email, password);

    console.log('user =>', user);
    this.user.next(user);
    localStorage.setItem('UserData', JSON.stringify(user));
  }


  getlist(){

    // return this.http.get<any>('https://reqres.in/api/users?page=2');
    return this.http.get<any>('https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/users');

  }
}
