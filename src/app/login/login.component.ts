import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  fakeValidLoginInfo = {
    email: 'hoanganleba@gmail.com',
    password: '123',
  };
  email: string = '';
  password: string = '';
  isLoginValid: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): any {
    if (
      this.email !== this.fakeValidLoginInfo.email ||
      this.password !== this.fakeValidLoginInfo.password
    ) {
      this.isLoginValid = false;
    } else {
      this.router.navigate(['/']);
    }
  }
}
