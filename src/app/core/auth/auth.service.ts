import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

import { AngularFireAuth } from 'angularfire2';

@Injectable()
export class AuthService {

  // public currentCredentials: BehaviorSubject<User> = new BehaviorSubject<User>(undefined);

  constructor(private firebaseAuth: AngularFireAuth) {
    console.log(firebaseAuth);
  }
}
