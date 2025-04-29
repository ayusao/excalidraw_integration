// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXtH0qVyZgvoe5Y6R10t1UcLphGtw1wTk",
  authDomain: "drawmate-c0069.firebaseapp.com",
  projectId: "drawmate-c0069",
  storageBucket: "drawmate-c0069.firebasestorage.app",
  messagingSenderId: "178324777013",
  appId: "1:178324777013:web:bd7e9316ee1662a302297c",
  measurementId: "G-30XD1DL39M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};