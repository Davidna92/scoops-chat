import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/storage";




const app = firebase.initializeApp({
  apiKey: "AIzaSyBIvBisnOVtcq4kBTgYUomWReXMp630EwM",
  authDomain: "news-14b77.firebaseapp.com",
  databaseURL: "https://news-14b77.firebaseio.com",
  projectId: "news-14b77",
  storageBucket: "news-14b77.appspot.com",
  messagingSenderId: "636466269581",
  appId: "1:636466269581:web:5cabe79d962e204cfd41c4",
  measurementId: "G-DC0C7LW0Y6"
});

export const db = app.firestore();
export const storage = app.storage();

export default app;