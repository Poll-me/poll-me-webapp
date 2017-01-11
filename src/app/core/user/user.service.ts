import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

import { User } from './user';

@Injectable()
export class UserService {

  public currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(undefined);
  public redirectUrl: string;

  public getUser(): User {
    return this.currentUser.getValue();
  }

  public updateUser(newUser: User): User {
    this.currentUser.next(newUser);
    return this.getUser();
  }

  public isValid(): boolean {
    const user = this.getUser();
    return !_.isUndefined(user) && !_.some(_.values(user), (val) => !val);
  }
}