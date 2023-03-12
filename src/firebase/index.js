// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${import.meta.env.FIREBASE_API_KEY}`,
  authDomain: 'ipeglin-v2.firebaseapp.com',
  databaseURL: 'https://ipeglin-v2-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ipeglin-v2',
  storageBucket: 'ipeglin-v2.appspot.com',
  messagingSenderId: `${import.meta.env.FIREBASE_SENDERID}`,
  appId: '1:105006877754:web:eea282eea00b49e271b903',
  measurementId: 'G-JCKTWHQSV7'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { db, storage }