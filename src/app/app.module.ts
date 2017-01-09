import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';

const APP_PROVIDERS = [];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef
  ) {}

  public hmrOnInit() {

    this.appRef.tick();
  }

  public hmrOnDestroy() {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    removeNgStyles();
  }

  // public hmrAfterDestroy() {}

}
