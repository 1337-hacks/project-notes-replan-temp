// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: `${process.env.API_KEY}`,
    authDomain: `${process.env.AUTH_DOMAIN}`,
    projectId: `${process.env.PROJECT_ID}`,
    storageBucket: `${process.env.STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
    appId: `${process.env.APP_ID}`,
    measurementId: `${process.env.MEASUREMENT_ID}`
  });
}

//const analytics = firebase.analytics();

export const auth = getAuth();