import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';

// SERVICES AND PROVIDERS
import { ENV_PROVIDERS } from '../environment';
import { FirebaseAppModule } from './firebase';
import { AuthService } from './auth';
import { UserService } from './user';

// PAGE COMPONENTS

// PARTIALS

@NgModule({
  declarations: [ ],
  imports: [
    FirebaseAppModule
  ],
  providers: [
    ENV_PROVIDERS,
    AuthService,
    UserService
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
