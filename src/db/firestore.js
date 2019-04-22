import firebase from 'firebase/app';
import 'firebase/auth';
import firestore from 'firebase/firestore';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: 'https://redditdev-e11fc.firebaseio.com',
  projectId: process.env.PROJECT_ID,
  storageBucket: 'redditdev-e11fc.appspot.com',
  messagingSenderId: '976173547224',
};

const init = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const db = firebase.firestore();

  return db;
};

export default init()

export const auth = firebase.auth();
