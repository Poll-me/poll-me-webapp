import { NgModule } from '@angular/core';

// import { SharedModule } from '../shared';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent }   from './user.component';

@NgModule({
  declarations: [ UserComponent ],
  imports: [
    // SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
