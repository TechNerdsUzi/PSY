import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
    password: new FormControl(null, [Validators.required])
  });
  email: AbstractControl;
  password: AbstractControl;
  showError: boolean = false;
  constructor(private authService: AuthService) {
    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if ($('.floating').length > 0) {
      $('.floating').on('focus blur', function (e) {
        $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }).trigger('blur');
    }
  }

  loginWithFacebook() {
    this.authService.signInWithFacebook();
  }

  loginWithGoogle() {
    this.authService.signInWithGoogle();
  }

  loginWithEmailPassword(formData) {
    this.showError = false;
    if (this.loginForm.valid) {
      this.authService.SignInWithEmailPassword(formData.email, formData.password);
    } else {
      this.showError = true;
    }

  }

}
