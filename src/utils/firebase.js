// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdgRzdeETS09zLKj5X3LxqWbGMxvr-8Yo",
  authDomain: "netfilx-gpt-f29e2.firebaseapp.com",
  projectId: "netfilx-gpt-f29e2",
  storageBucket: "netfilx-gpt-f29e2.appspot.com",
  messagingSenderId: "765029026569",
  appId: "1:765029026569:web:a76ab81fcb871c3538e1d8",
  measurementId: "G-ERR0J180CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();