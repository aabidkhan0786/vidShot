// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1JQ5w2pWVPGhPAMRmK85uxMrKYbaP3Ds",
  authDomain: "vidshot-f0eff.firebaseapp.com",
  projectId: "vidshot-f0eff",
  storageBucket: "vidshot-f0eff.appspot.com",
  messagingSenderId: "204638927785",
  appId: "1:204638927785:web:9bc9041bd7643f0deae2b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app;