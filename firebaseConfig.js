// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-B6Eheq18aUg74R3Uk9PLgPMBLeQ-hEE",
  authDomain: "backtobasics-c8ef0.firebaseapp.com",
  projectId: "backtobasics-c8ef0",
  storageBucket: "backtobasics-c8ef0.appspot.com",
  messagingSenderId: "75072269270",
  appId: "1:75072269270:web:92e30ecd7c39a17b99d277",
  measurementId: "G-X159B7KJ1R"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp)
export default firebaseApp