import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { LoginComponent } from './login';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', redirectTo: '' },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {}
