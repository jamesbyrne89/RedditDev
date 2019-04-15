import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: 'https://redditdev-e11fc.firebaseio.com',
  projectId: process.env.PROJECT_ID,
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
