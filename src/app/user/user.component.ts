import { Component } from '@angular/core';

import * as _ from 'lodash';

import { UserService, User } from '../core/user';

@Component({
  selector: 'pm-user',
  templateUrl: './user.component.html'
})
export class UserComponent {

  public user: User;

  private readonly defaultAvatarUrl: string = '/assets/img/user/default-avatar.png';

  constructor (
    private userService: UserService
  ) {
    userService.currentUser.subscribe((u) => this.user = u);
  }

  public onSubmit() {
    console.log('Submit');
  }

  public getUserAvatarUrl(): string {
    return this.user.photoUrl || this.defaultAvatarUrl;
  }
}
