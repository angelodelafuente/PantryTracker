// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import dotenv from 'dotenv';

// Load .env file
dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId

};

console.log('API Key bruh:', process.env.authDomain); // Add this line

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };

