// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDnpi3PB9ddh858-7SbLlvId6riD6Kzq80",
  authDomain: "zerocostcoursebyyogesh.firebaseapp.com",
  projectId: "zerocostcoursebyyogesh",
  storageBucket: "zerocostcoursebyyogesh.appspot.com",
  messagingSenderId: "410088499391",
  appId: "1:410088499391:web:c7ff4cf20e4879b6f37e0a",
  measurementId: "G-M7SHC8WQHC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
