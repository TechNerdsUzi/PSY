import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('./pages/forget-password/forget-password.module').then(m => m.ForgetPasswordModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'doctor-profile',
        loadChildren: () => import('./pages/doctor-profile/doctor-profile.module').then(m => m.DoctorProfileModule)
      },
      {
        path: 'book-appointment',
        loadChildren: () => import('./pages/book-appointment/book-appointment.module').then(m => m.BookAppointmentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
