import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

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

  forgetPassword(formValues) {
    this.showError = false;
    if (this.forgetForm.valid) {

    } else {
      this.showError = true;
    }
  }
}
