import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'user',
  loadChildren: 'app/user/user.module#UserModule',
}, {
  path: '',
  redirectTo: 'user',
  pathMatch: 'full'
}];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class AppRoutingModule { }
