import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXzsYqDjfKg5nc4h7RbzZUbti6VKgW800",
  authDomain: "ai-customer-support-c7620.firebaseapp.com",
  projectId: "ai-customer-support-c7620",
  storageBucket: "ai-customer-support-c7620.appspot.com",
  messagingSenderId: "128690313458",
  appId: "1:128690313458:web:abfae391e155f5a1b8986b",
  measurementId: "G-JCZ3SMY0R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
