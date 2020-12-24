import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isDoctor: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  doctorToggle() {
    this.isDoctor = this.isDoctor ? false : true;
  }

}
