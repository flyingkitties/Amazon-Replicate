// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import firebase from "firebase";
//  import * as admin from "firebase-admin";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUZmQTJlZJCL7upsCwstkdBgZbL4dwOtU",
  authDomain: "rita--replicate.firebaseapp.com",
  projectId: "rita--replicate",
  storageBucket: "rita--replicate.appspot.com",
  messagingSenderId: "33219224981",
  appId: "1:33219224981:web:a409f9240c2b0b713e829c",
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();

export default db;

// export const auth = getAuth(app)
