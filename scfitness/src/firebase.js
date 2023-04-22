// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import {getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALS6Dl6SwqxoHwcXGgz_w63cDtMxvNUZI",
  authDomain: "scfitness-73f8c.firebaseapp.com",
  projectId: "scfitness-73f8c",
  storageBucket: "scfitness-73f8c.appspot.com",
  messagingSenderId: "683609650929",
  appId: "1:683609650929:web:1c614389a6f00160381b50"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
export const db = getFirestore(app);
