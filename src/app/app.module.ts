import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { removeNgStyles } from '@angularclass/hmr';

// Main imports
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import '../styles/styles.scss';

// Features
import { HomeModule } from './home';
import { UserModule } from './user';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    UserModule
  ],
  bootstrap: [ AppComponent ]
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
