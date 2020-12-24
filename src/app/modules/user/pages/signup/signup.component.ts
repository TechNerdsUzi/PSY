import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {

  isDoctor: boolean = false;
  constructor() { }

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

}
