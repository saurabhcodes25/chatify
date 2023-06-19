import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase
  .initializeApp({
    apiKey:"AIzaSyC3uqIn7qH0bGxZTlAU7m-6jUt-ABbMaU8",
    authDomain: "chatify-25.firebaseapp.com",
    projectId: "chatify-25",
    storageBucket: "chatify-25.appspot.com",
    messagingSenderId: "36347939104",
    appId: "1:36347939104:web:9a757f8ca6091535c0af45",
  })
  .auth();
