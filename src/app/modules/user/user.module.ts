import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [UserComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    LayoutModule
  ]
})
export class UserModule { }
