import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import * as moment from 'moment';
import 'daterangepicker'
@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit, AfterViewInit {
  @ViewChild('bookingrange') bookingrange: ElementRef;
  start = moment().subtract(6, 'days');
  end = moment();
  startDate = this.start.format('MMMM D, YYYY');
  endDate = this.end.format('MMMM D, YYYY');
  startEndDate: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(this.bookingrange.nativeElement).daterangepicker({
      startDate: this.start,
      endDate: this.end,
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    }, (start, end, label) => {
      this.startDate = start.format('MMMM D, YYYY');
      this.endDate = end.format('MMMM D, YYYY');
      this.startEndDate = this.startDate + ' - ' + this.endDate;
    });
  }

}
