// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDei2utLnuInz1Ct1NaMu3-Dnv1FgAXvLg",
  authDomain: "netflix-gpt-bc9e8.firebaseapp.com",
  projectId: "netflix-gpt-bc9e8",
  storageBucket: "netflix-gpt-bc9e8.appspot.com",
  messagingSenderId: "143961911305",
  appId: "1:143961911305:web:464173fa4ed92f930508d8",
  measurementId: "G-14LCFVCXQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

