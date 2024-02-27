import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/User';
import { InterfaceUserLogin } from '../interfaces/InterfaceUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_REGISTER_URL, USER_UPDATE } from '../constants/urls';
import { ToastrService } from 'ngx-toastr';
import { InterfaceUserRegister } from '../interfaces/InterfaceUserRegister';
import { InterfaceUserUpdate } from '../interfaces/InterfaceUserUpdate';
import { Router } from '@angular/router';


const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private subjectUser = new BehaviorSubject<User>(this.getFromLocalStorage());
  public observableUser:Observable<User>;
  constructor(private http:HttpClient, private toastrService: ToastrService, private router: Router) {
    this.observableUser = this.subjectUser.asObservable();
  }

  public get currentUser():User{
    return this.subjectUser.value;
  }

  login(userLogin:InterfaceUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) =>{
          this.setToLocalStorage(user);
          this.subjectUser.next(user);
          this.toastrService.success(
            `Welcome to Gvozdjara Metal ${user.name}!`,
            'Login Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed')
        }
      })
    );
  }
  registration(userRegiser:InterfaceUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegiser).pipe(
      tap({
        next: (user) => {
          this.setToLocalStorage(user);
          this.subjectUser.next(user);
          this.toastrService.success(
            `Welcome to the Gvozdjara Metal ${user.name}`,
            'Register Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error,
            'Register Failed')
        }
      })
    )
  }
  update(userId: string ,userUpdate: InterfaceUserUpdate): Observable<User>{
    return this.http.put<User>(USER_UPDATE + userId, userUpdate).pipe(
      tap({
        next: (user) => {
          this.setToLocalStorage(user);
          this.subjectUser.next(user);
          this.toastrService.success(
            `Update done, Welcome again ${user.name}`
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error,
            'Update Failed')
        }
      })
    )
  }

  logout(){
    this.subjectUser.next(new User());
    localStorage.removeItem(USER_KEY);
    this.router.navigateByUrl('');
  }

  private setToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}

