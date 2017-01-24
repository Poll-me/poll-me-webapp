import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';

import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

@Injectable()
export class FirebaseUIService {

  public loaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private authUIInstance;
  private started: boolean = false;
  private settings = {
    siteName: 'PollMe WebApp',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: (currentUser, credential, redirectUrl) => {
        // this.router.navigate(['/']);
        location.href = '/';
      },
      uiShown: () => {
        this.loaded.next(true);
      }
    }
  };

  constructor(private router: Router) {}

  public initFirebaseUI(selector: string): void {
    _.delay(() => {
      try {
        let authUI = this.getAuthUI();
        authUI.start(selector, this.settings);
        this.started = true;
      } catch (ex) {
        // TODO: Fix the one instance for firebaseUI in a better way
        location.reload();
      }
    }, 1000);
  }

  private initAuthUI(): void {
    this.authUIInstance = new firebaseui.auth.AuthUI(firebase.auth());
  }

  private getAuthUI(): any {
    if (_.isUndefined(this.authUIInstance)) {
      this.initAuthUI();
    }
    return this.authUIInstance;
  }
}
