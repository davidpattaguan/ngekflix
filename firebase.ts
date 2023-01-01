// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6J1X6NzTKs1gH_brIztvNS5igx5ieCGs",
  authDomain: "ngekflix-31f5d.firebaseapp.com",
  projectId: "ngekflix-31f5d",
  storageBucket: "ngekflix-31f5d.appspot.com",
  messagingSenderId: "783213282368",
  appId: "1:783213282368:web:3bc05e2dabdd72cb324ba5",
  measurementId: "G-06R1095WGG",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
