// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjOdlyTbgov3qytXy6n27Pr_wY3cNrvzs",
  authDomain: "code-turf-94bae.firebaseapp.com",
  projectId: "code-turf-94bae",
  storageBucket: "code-turf-94bae.appspot.com",
  messagingSenderId: "1053940324182",
  appId: "1:1053940324182:web:fc02df7b1f053f0035e8f7",
  measurementId: "G-HLY8V3YNS3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);
// Initialize Storage
const imagedb = getStorage(app);
const db = getFirestore(app);

export { app, analytics, imagedb, db };
