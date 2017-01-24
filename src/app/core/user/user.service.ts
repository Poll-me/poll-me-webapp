import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { User as AuthUser } from 'firebase';

import { AuthService } from '../auth';
import { User } from './user';

@Injectable()
export class UserService {

  public currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
  public isLogged: boolean = false;

  constructor(private authService: AuthService) {
    authService.currentAuth.subscribe(this.updateFromAuth.bind(this));
  }

  public getUser(): User {
    return this.currentUser.getValue();
  }

  public updateProfileData(user: User): Observable<void> {
    return this.authService.updateData({
      displayName: user.name,
      photoUrl: user.photoUrl
    }).do(() => this.updateUser(user));
  }

  public updateUser(newUser: User): User {
    this.currentUser.next(newUser);
    return this.getUser();
  }

  public isValid(): boolean {
    const user = this.getUser();
    return !_.isUndefined(user) && !_.some(_.values(user), (val) => !val);
  }

  public logOut() {
    this.authService.logOut();
  }

  private updateFromAuth(authUser: AuthUser) {
    this.isLogged = !authUser.isAnonymous;
    const user = new User({
      id: authUser.uid,
      name: authUser.displayName,
      email: authUser.email,
      photoUrl: authUser.photoURL
    });
    this.updateUser(user);
  };
}
