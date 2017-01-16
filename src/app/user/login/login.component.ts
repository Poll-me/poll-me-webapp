import { Component } from '@angular/core';

import * as _ from 'lodash';

import { UserService, User } from '../../core/user';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  public user: User;

  constructor (
    private userService: UserService
  ) {
    userService.currentUser.subscribe((u) => this.user = u);
  }
}
