import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { NgxStickySidebarModule } from '@smip/ngx-sticky-sidebar';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgxStickySidebarModule
  ]
})
export class SearchModule { }
