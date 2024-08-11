import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgYK1IT7xwrmR93t0sOerybFVhqH3faTk",
  authDomain: "inventory-management-d9e7b.firebaseapp.com",
  projectId: "inventory-management-d9e7b",
  storageBucket: "inventory-management-d9e7b.appspot.com",
  messagingSenderId: "733036480925",
  appId: "1:733036480925:web:b01867a377f13ed990c774",
  measurementId: "G-2GBRV5WH3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
