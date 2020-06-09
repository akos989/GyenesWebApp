import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  isLoading: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;
    this.authService.login(
      this.loginForm.form.controls.email.value,
      this.loginForm.form.controls.password.value
    ).subscribe(resData => {
      this.isLoading = false;
      this.router.navigate(['/operators']);
    },
    error => {
      this.isLoading = false;
    });
  }

}
