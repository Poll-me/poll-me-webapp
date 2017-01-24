import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';

import { AngularFireAuth, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { User as AuthUser } from 'firebase';

@Injectable()
export class AuthService {

  public currentAuth: Subject<AuthUser> = new Subject<AuthUser>();

  private authUser: AuthUser;

  constructor(private firebaseAuth: AngularFireAuth) {
    firebaseAuth.subscribe(this.authChanges.bind(this));
    this.currentAuth.subscribe((au) => this.authUser = au);
  }

  public logOut(): Observable<void> {
    return Observable.fromPromise(this.firebaseAuth.logout());
  }

  private authChanges(authState: FirebaseAuthState): void {
    if (_.isNull(authState)) {
      this.logAsAnonymous().subscribe((as) => this.currentAuth.next(as.auth));
    } else {
      this.currentAuth.next(authState.auth);
    }
  }

  private logAsAnonymous(): Observable<FirebaseAuthState> {
    return Observable.fromPromise(this.firebaseAuth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    }) as Promise<any>);
  }
}
