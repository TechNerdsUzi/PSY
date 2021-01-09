import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import 'select2';
import 'bootstrap4-datetimepicker';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if ($('.select').length > 0) {
      $('.select').select2({
        minimumResultsForSearch: -1,
        width: '100%'
      });
    }
    if ($('.datetimepicker').length > 0) {
      $('.datetimepicker').datetimepicker({
        format: 'DD/MM/YYYY',
        widgetPositioning: {
          vertical: 'bottom',
        },

        // container: '.cal-icon',
        icons: {
          up: "fas fa-chevron-up",
          down: "fas fa-chevron-down",
          next: 'fas fa-chevron-right',
          previous: 'fas fa-chevron-left'
        }
      });
    }
    if ($(window).width() > 767) {
      // if ($('.theiaStickySidebar').length > 0) {
      //   $('.theiaStickySidebar').theiaStickySidebar({
      //     // Settings
      //     additionalMarginTop: 30
      //   });
      // }
    }
  }

}
