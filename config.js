import * as firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDz4UHDfpRm5dPfMV8bslHxHaYXs0XCNjo",
    authDomain: "bedtime-stories-4138a.firebaseapp.com",
    projectId: "bedtime-stories-4138a",
    storageBucket: "bedtime-stories-4138a.appspot.com",
    messagingSenderId: "240544800968",
    appId: "1:240544800968:web:c65da9230138ec820205fd"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()