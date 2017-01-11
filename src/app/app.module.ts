import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { removeNgStyles } from '@angularclass/hmr';

// Main imports
import { CoreModule } from './core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
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
