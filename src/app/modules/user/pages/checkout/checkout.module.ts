import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { NgxStickySidebarModule } from '@smip/ngx-sticky-sidebar';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    NgxStickySidebarModule
  ]
})
export class CheckoutModule { }
