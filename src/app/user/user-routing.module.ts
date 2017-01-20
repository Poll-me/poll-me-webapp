import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { IsAnonymousGuard } from '../core/user';

import { UserComponent } from './user.component';
import { LoginComponent } from './login';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: UserComponent },
  {
    path: 'login',
    canActivate: [ IsAnonymousGuard ],
    component: LoginComponent
  },
  { path: 'profile', redirectTo: '' },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  providers: [ IsAnonymousGuard ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {}
