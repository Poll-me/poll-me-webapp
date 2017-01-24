import { Component } from '@angular/core';

import * as _ from 'lodash';

import { UserService, User } from '../core/user';

@Component({
  selector: 'pm-user',
  templateUrl: './user.component.html'
})
export class UserComponent {

  public user: User;
  public editMode: boolean = false;

  private readonly defaultAvatarUrl: string = '/assets/img/user/default-avatar.png';

  constructor (
    private userService: UserService
  ) {
    userService.currentUser.subscribe((u) => this.user = u);
  }

  public onSubmit() {
    this.userService.updateProfileData(this.user).subscribe(() => console.log('User updated!'));
  }

  public getUserAvatarUrl(): string {
    return this.user.photoUrl || this.defaultAvatarUrl;
  }
}
