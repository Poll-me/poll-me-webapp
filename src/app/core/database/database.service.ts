import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';

import {
  AngularFireDatabase,
  FirebaseObjectObservable,
  FirebaseListObservable } from 'angularfire2';
import {
  Query as FirebaseQuery,
  AFUnwrappedDataSnapshot,
  FirebaseObjectFactoryOpts,
  FirebaseListFactoryOpts } from 'angularfire2/interfaces';

@Injectable()
export class DatabaseService {

  constructor(private afd: AngularFireDatabase) {}

  public objectQuery(target: string) {
    let fbStream: FirebaseObjectObservable<any> = this.afd.object(target);
    return fbStream.map(this.checkObjectRef);
  }

  public listQuery(target: string, params: FirebaseQuery = {}): Observable<Array<{}>> {
    let fbQuery: FirebaseListFactoryOpts = { query: params };
    let fbStream: FirebaseListObservable<any> = this.afd.list(target, fbQuery);
    return fbStream;
  }

  private checkObjectRef(snapshot: AFUnwrappedDataSnapshot): AFUnwrappedDataSnapshot {
    if (!snapshot.$exists()) {
      throw new ReferenceError(`The reference '${snapshot.$key}' does not exist on the database.`);
    }
    return snapshot;
  }

}
