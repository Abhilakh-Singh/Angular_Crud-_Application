import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { AuthService } from '../auth.service';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: SignupService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loginService.loginApi().subscribe((response) => {
      const user = response.find((result: any) =>
        result.email === this.loginForm.value.email && result.password ===  this.loginForm.value.password );


      if (user) {
       // console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
       // alert("login successfully ");
        this.router.navigate(['list1']);
      }
      if (!user) {
        alert("please check email and password");
      }
    }
    );
  }
}
