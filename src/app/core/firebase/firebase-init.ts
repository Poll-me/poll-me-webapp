import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: 'AIzaSyAncYW-RYkegv0gq8_laAlUTe3vfBd6KEY',
  authDomain: 'poll-me-36f9a.firebaseapp.com',
  databaseURL: 'https://poll-me-36f9a.firebaseio.com',
  storageBucket: 'poll-me-36f9a.appspot.com',
  messagingSenderId: '772514369454'
};

export const FirebaseAppModule = AngularFireModule.initializeApp(firebaseConfig);
