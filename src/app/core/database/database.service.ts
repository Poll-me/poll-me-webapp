import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class DatabaseService {

  constructor(private afd: AngularFireDatabase) {}

}
