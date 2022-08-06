// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt1opxM5PLQqBnWNB8XHnNPyHmu-0Gad0",
  authDomain: "login-test-f85b6.firebaseapp.com",
  projectId: "login-test-f85b6",
  storageBucket: "login-test-f85b6.appspot.com",
  messagingSenderId: "810208604213",
  appId: "1:810208604213:web:a09a75e5ef36b4746d017c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app)

export {db, auth}