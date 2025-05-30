import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBUZmQTJlZJCL7upsCwstkdBgZbL4dwOtU',
  authDomain: 'rita--replicate.firebaseapp.com',
  projectId: 'rita--replicate',
  storageBucket: 'rita--replicate.appspot.com',
  messagingSenderId: '33219224981',
  appId: '1:33219224981:web:a409f9240c2b0b713e829c',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
// Initialize Firebase

// const app = initializeApp(firebaseConfig);

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();
// const db = app.firestore();

// export default db;
// export const auth = getAuth(app);

// export const auth = getAuth(app)
