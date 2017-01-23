import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';

import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { UserService }      from './user.service';

@Injectable()
export class IsAnonymousGuard implements CanActivate {

  private readonly fallbackRoute: any[] = ['/user'];

  constructor(
    private userService: UserService,
    private router: Router) {}

  public canActivate(): Observable<boolean> {
    return this.checkUser();
  }

  private checkUser(): Observable<boolean> {
    const validUser = _.isString(this.userService.getUser().id);
    let userLoggedObservable = Observable.from([!this.userService.isLogged]);
    if (!validUser) {
      userLoggedObservable =
        this.userService.currentUser.skip(1).map((u) => {
          if (this.userService.isLogged) {
            this.router.navigate(this.fallbackRoute, {
              replaceUrl: true
            });
          }
          return !this.userService.isLogged;
        });
    }
    return userLoggedObservable;
  }
}
