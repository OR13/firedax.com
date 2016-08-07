import {
  AuthMethods,
  defaultFirebase,
  FIREBASE_PROVIDERS,
  firebaseAuthConfig
} from 'angularfire2';


export const FIREBASE_APP_PROVIDERS: any[] = [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyA9zPnC03vrZb456y7hw1IFRntid54uzSQ",
    authDomain: "firedax-321ac.firebaseapp.com",
    databaseURL: "https://firedax-321ac.firebaseio.com",
    storageBucket: "firedax-321ac.appspot.com",
  }),
  firebaseAuthConfig({
    method: AuthMethods.Popup,
    remember: 'default'
  })
];
