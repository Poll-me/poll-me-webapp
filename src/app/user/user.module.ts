import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent }   from './user.component';
import { LoginComponent }   from './login';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
