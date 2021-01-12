import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit, AfterViewInit {

  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.compose([Validators.required, Validators.email]))
  });
  email: AbstractControl;
  showError: boolean = false;
  constructor(private authService: AuthService) {
    this.email = this.forgetForm.controls['email'];
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

  forgetPassword(formValues) {
    this.showError = false;
    if (this.forgetForm.valid) {
      this.authService.userResetPassword(formValues.email);
    } else {
      this.showError = true;
    }
  }
}
