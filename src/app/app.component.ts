import { Component, ViewEncapsulation } from '@angular/core';

import { User, UserService } from './core/user';

@Component({
  selector: 'pm-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private user: User;

  constructor(public userService: UserService) {
    userService.currentUser.subscribe((u) => this.user = u);
  }

  public logOut() {
    this.userService.logOut();
  }
}
