import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { IsLoggedGuard, IsNotLoggedGuard } from '../core/user';

import { UserComponent } from './user.component';
import { LoginComponent } from './login';

const routes: Routes = [
  {
    path: '',
    canActivate: [ IsLoggedGuard ],
    pathMatch: 'full',
    component: UserComponent
  }, {
    path: 'login',
    canActivate: [ IsNotLoggedGuard ],
    component: LoginComponent
  },
  { path: 'profile', redirectTo: '' },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  providers: [
    IsLoggedGuard,
    IsNotLoggedGuard
  ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {}
