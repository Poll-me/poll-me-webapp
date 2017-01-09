/*
 * Angular 2 decorators and services
 */
import {
  Component,
  ViewEncapsulation
} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'pm-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {

  // constructor( ) {}

}
