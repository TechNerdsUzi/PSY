import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {

  isDoctor: boolean = false;
  signupForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
    mobile: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });
  name: AbstractControl;
  email: AbstractControl;
  mobile: AbstractControl;
  password: AbstractControl;
  showError: boolean = false;
  constructor(private authService: AuthService) {
    this.name = this.signupForm.controls['name'];
    this.email = this.signupForm.controls['email'];
    this.mobile = this.signupForm.controls['mobile'];
    this.password = this.signupForm.controls['password'];
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

  doctorToggle() {
    this.isDoctor = this.isDoctor ? false : true;
  }

  loginWithFacebook() {
    this.authService.signInWithFacebook();
  }

  loginWithGoogle() {
    this.authService.signInWithGoogle();
  }

  signupFormSubmit(formData) {
    this.showError = false;
    if (this.signupForm.valid) {
      this.authService.SignUpUser(formData.email, formData.password);
    } else {
      this.showError = true;
    }
  }

}
