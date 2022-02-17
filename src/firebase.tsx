// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7pOu6qCRghbMKnavHU3wN4J8IRd7KXVc",
  authDomain: "react-firebase-crud-6fac3.firebaseapp.com",
  projectId: "react-firebase-crud-6fac3",
  storageBucket: "react-firebase-crud-6fac3.appspot.com",
  messagingSenderId: "859022452129",
  appId: "1:859022452129:web:79d2568e63ec40f5f417e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  
export default db;