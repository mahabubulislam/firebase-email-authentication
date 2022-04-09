// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuUBnUDhbEMVprXY7jnCmauJa3NOI_6N0",
  authDomain: "email-authentication-f9238.firebaseapp.com",
  projectId: "email-authentication-f9238",
  storageBucket: "email-authentication-f9238.appspot.com",
  messagingSenderId: "553849884230",
  appId: "1:553849884230:web:436a25f36238489a4c0447",
  measurementId: "G-TTX777P5DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app