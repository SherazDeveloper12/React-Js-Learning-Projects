// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,getStorage } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfTsBx3jkYqksFn0vPGOzTG9Qo2TcXBHo",
  authDomain: "fashionstoredb.firebaseapp.com",
  projectId: "fashionstoredb",
  storageBucket: "fashionstoredb.firebasestorage.app",
  messagingSenderId: "135903099635",
  appId: "1:135903099635:web:785d3a2ba09331bf3b9586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);