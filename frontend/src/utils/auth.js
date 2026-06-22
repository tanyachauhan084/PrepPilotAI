
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "preppilotai.firebaseapp.com",
  projectId: "preppilotai",
  storageBucket: "preppilotai.firebasestorage.app",
  messagingSenderId: "404850320911",
  appId: "1:404850320911:web:4fb573e37c3c97cec3a57a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider= new GoogleAuthProvider()


export {auth, provider};