// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5PVSJj8sQNrd8CaEEz4u9KnDQhqy4ryc",
  authDomain: "rita-amz-replicate.firebaseapp.com",
  projectId: "rita-amz-replicate",
  storageBucket: "rita-amz-replicate.appspot.com",
  messagingSenderId: "580921393508",
  appId: "1:580921393508:web:d7f36d9b073801f98aba71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

