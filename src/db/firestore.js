import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBkHyS6BMFlRBww9mZMsTQgMzjp6P9ml6M',
  authDomain: 'redditdev-e11fc.firebaseapp.com',
  databaseURL: 'https://redditdev-e11fc.firebaseio.com',
  projectId: 'redditdev-e11fc',
  storageBucket: 'redditdev-e11fc.appspot.com',
  messagingSenderId: '976173547224',
};

const initDB = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  var db = firebase.firestore();

  return db;
};

export default initDB()
