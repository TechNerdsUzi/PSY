import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookAppointmentRoutingModule } from './book-appointment-routing.module';
import { BookAppointmentComponent } from './book-appointment.component';


@NgModule({
  declarations: [BookAppointmentComponent],
  imports: [
    CommonModule,
    BookAppointmentRoutingModule
  ]
})
export class BookAppointmentModule { }
