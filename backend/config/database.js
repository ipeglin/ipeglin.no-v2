import admin from 'firebase-admin';
import serviceAccount from '../serviceAccountKey.json' assert {type: 'json'};

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://ipeglin-v2-default-rtdb.europe-west1.firebasedatabase.app/"
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();