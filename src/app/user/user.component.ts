import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { UserService, User } from '../core/user';

@Component({
  selector: 'pm-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: User;

  constructor (
    private userService: UserService
  ) {
    userService.currentUser.subscribe((u) => this.user = u);
  }

  public ngOnInit() {
    console.log('asd');
  }
}