// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG2bKV6oznBkw03qO3yM8zsGmNrOyVYLk",
  authDomain: "jobapplication-8194f.firebaseapp.com",
  projectId: "jobapplication-8194f",
  storageBucket: "jobapplication-8194f.appspot.com",
  messagingSenderId: "197504315387",
  appId: "1:197504315387:web:1db6309c739beb335aa55e",
  measurementId: "G-2WL028649X",
  databaseURL : "https://jobapplication-8194f-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authInstance = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { authInstance as auth,database,storage };