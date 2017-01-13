import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';

import { AngularFireAuth, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { User } from 'firebase';

@Injectable()
export class AuthService {

  public currentAuth: Subject<User> = new Subject<User>();

  constructor(private firebaseAuth: AngularFireAuth) {
    firebaseAuth.subscribe(this.authChanges.bind(this));
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
