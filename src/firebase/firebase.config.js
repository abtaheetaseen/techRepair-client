// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb_EWRbXpH8e2INKuyrO33DrYmE-da120",
  authDomain: "tech-repair-1939e.firebaseapp.com",
  projectId: "tech-repair-1939e",
  storageBucket: "tech-repair-1939e.appspot.com",
  messagingSenderId: "881356467380",
  appId: "1:881356467380:web:8a0ae2ca836d6b94183be1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;