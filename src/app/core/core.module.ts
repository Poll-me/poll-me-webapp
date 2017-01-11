import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';

// SERVICES AND PROVIDERS
import { ENV_PROVIDERS } from '../environment';

// PAGE COMPONENTS

// PARTIALS

@NgModule({
  declarations: [ ],
  imports: [ ],
  exports: [
    HttpModule,
  ],
  providers: [
    ENV_PROVIDERS
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
