import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxDoLA7HzAzVhEcABPRqsPntVlEeRLCfQ",
  authDomain: "customer-support-47887.firebaseapp.com",
  projectId: "customer-support-47887",
  storageBucket: "customer-support-47887.appspot.com",
  messagingSenderId: "510765943372",
  appId: "1:510765943372:web:0b2b10c7ebf6a33e8742e9",
  measurementId: "G-0TTNP6Y58D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export default app;
