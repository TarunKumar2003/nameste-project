// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSVbd2YrbuHPjXKXEU781Dp-4KVsEfvYg",
  authDomain: "cinewave-62ca5.firebaseapp.com",
  projectId: "cinewave-62ca5",
  storageBucket: "cinewave-62ca5.appspot.com",
  messagingSenderId: "1061187569234",
  appId: "1:1061187569234:web:98faa070c4fad5ed99418b",
  measurementId: "G-2ZWMFKQ0LE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
