import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { FirebaseUIService } from './firebaseui.service';
import { UserService, User } from '../../core/user';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  providers: [ FirebaseUIService ]
})
export class LoginComponent implements OnInit {

  public user: User;

  public readonly fbUIContainerId = 'firebaseui-container';

  constructor (
    private fbUIService: FirebaseUIService,
    private userService: UserService
  ) {
    userService.currentUser.subscribe((u) => this.user = u);
  }

  public ngOnInit() {
    this.fbUIService.initFirebaseUI(`#${this.fbUIContainerId}`);
  }
}
