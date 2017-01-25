import { Injectable } from '@angular/core';
import {
  CanActivate, Router
} from '@angular/router';

import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { User, UserService } from '../';

@Injectable()
export class UserGuard implements CanActivate {

  protected readonly fallbackRoute: any[] = ['/user'];

  constructor(
    private userService: UserService,
    private router: Router) {}

  public canActivate(): Observable<boolean> {
    return this.getUserObservable();
  }

  protected checkUser(userService: UserService): boolean {
    return true;
  }

  private getUserObservable(): Observable<boolean> {
    return this.userService.currentUser.filter(this.isValidUser).map((u) => {
      const guardFlag = this.checkUser(this.userService);
      if (!guardFlag) {
        this.router.navigate(this.fallbackRoute, {
          replaceUrl: true
        });
      }
      return guardFlag;
    });
  }

  private isValidUser(user: User): boolean {
    return _.isString(user.id);
  }
}
