// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGtjszyhARFVlm7Kbcsefnqf04kBkwQsA",
  authDomain: "ema-john-shopping-512bd.firebaseapp.com",
  projectId: "ema-john-shopping-512bd",
  storageBucket: "ema-john-shopping-512bd.appspot.com",
  messagingSenderId: "571855730613",
  appId: "1:571855730613:web:0ebb196dc50e38c53b8bfc",
  measurementId: "G-Q623ZWVP2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
