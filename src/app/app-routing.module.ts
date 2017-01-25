import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  loadChildren: './home#HomeModule',
}, {
  path: 'user',
  loadChildren: './user#UserModule',
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class AppRoutingModule { }
