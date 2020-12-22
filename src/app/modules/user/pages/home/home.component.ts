import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('specialitiesSlider') specialitiesSlider: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(this.specialitiesSlider.nativeElement).slick({
      dots: true,
      autoplay: true,
      infinite: true,
      variableWidth: true,
      prevArrow: false,
      nextArrow: false
    });
  }

}
