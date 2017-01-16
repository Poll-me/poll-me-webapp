import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'user',
  loadChildren: './user#UserModule',
}, {
  path: '**',
  redirectTo: 'user'
}];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class AppRoutingModule { }
