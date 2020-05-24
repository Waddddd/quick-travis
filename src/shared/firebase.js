import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAJR7H4KjFGNF-tDKP_mJXmZVYDVL_j71E",
    authDomain: "quick-travis-f010b.firebaseapp.com",
    databaseURL: "https://quick-travis-f010b.firebaseio.com",
    projectId: "quick-travis-f010b",
    storageBucket: "quick-travis-f010b.appspot.com",
    messagingSenderId: "554642071717",
    appId: "1:554642071717:web:b0abf35d113fc3cc8f2d4c",
  };
  
  firebase.initializeApp(firebaseConfig);

export default firebase;