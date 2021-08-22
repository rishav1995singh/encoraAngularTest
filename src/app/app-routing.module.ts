import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent
  },
  {
    path: 'login', component: AuthComponent
  },
  {

      path: 'register', component: RegisterComponent

  },
  {

  path: 'dashboard', component: DashboardComponent
  // path: 'dashboard', canActivate:[AuthGuard], component: DashboardComponent

},

{

  path: 'profileDetails', component: ProfileDetailComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
