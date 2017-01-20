import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';

import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

@Injectable()
export class FirebaseUIService {

  private authUIInstance;
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
        this.router.navigate(['/']);
      }
    }
  };

  constructor(private router: Router) {}

  public initFirebaseUI(selector: string): void {
    _.delay(() => {
      let authUI = this.getAuthUI();
      authUI.start(selector, this.settings);
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
