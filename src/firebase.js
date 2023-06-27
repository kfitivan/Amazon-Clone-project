import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDi7f-U_KPSYQ89Om4zbb180o_02r_Nm1M",
  authDomain: "eclone-ee9d6.firebaseapp.com",
  projectId: "eclone-ee9d6",
  storageBucket: "eclone-ee9d6.appspot.com",
  messagingSenderId: "470569676135",
  appId: "1:470569676135:web:5297edacffb19573c213c2",
  measurementId: "G-7E8PR153JF"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
