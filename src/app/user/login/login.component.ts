import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as _ from 'lodash';

import { FirebaseUIService } from './firebaseui.service';
import { UserService, User } from '../../core/user';

@Component({
  selector: 'pm-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ FirebaseUIService ]
})
export class LoginComponent implements OnInit {

  public user: User;

  public fbUILoaded: boolean = false;
  public readonly fbUIContainerId = 'firebaseui-container';

  constructor (
    private fbUIService: FirebaseUIService,
    private userService: UserService
  ) {
    userService.currentUser.subscribe((u) => this.user = u);
    fbUIService.loaded.subscribe((l) => this.fbUILoaded = l);
  }

  public ngOnInit() {
    this.fbUIService.initFirebaseUI(`#${this.fbUIContainerId}`);
  }
}