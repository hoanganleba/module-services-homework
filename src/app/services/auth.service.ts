import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email: string = '';
  password: string = '';
  token: string = '';
  isLogged: boolean = false;

  login() {
    localStorage.setItem(
      'userInfo',
      JSON.stringify({
        email: this.email,
        password: this.password,
        token: this.token,
        isLogged: this.isLogged,
      })
    );
  }

  logout() {
    localStorage.removeItem('userInfo')
  }

  isAuthenticated() {
    return this.isLogged;
  }

  getUserInfo() {
    localStorage.getItem('userInfo')
  }
}
